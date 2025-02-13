# Database Management and Seeding

## Overview

This document explains how database seeding and management works in the Cloud Summit 2025 voting system. The system uses MongoDB as its database and Prisma as the ORM.

## Environment-Specific Behavior

The system behaves differently based on the environment:

- **Development**: Full seeding with test data
- **Staging**: Full seeding with test data
- **Production**: Only seeds essential data (providers)

## Available Commands

### Development Environment

```bash
# Start MongoDB locally
npm run local:db:start

# Stop MongoDB
npm run local:db:stop

# Restart MongoDB
npm run local:db:restart

# Push schema changes
npm run local:db:push

# Seed database with initial data
npm run local:db:seed

# Clean database (removes all data)
npm run local:db:clean

# Clean and reseed database
npm run local:db:reseed

# Open Prisma Studio
npm run local:db:studio
```

### Staging Environment

```bash
# Seed database with initial data
npm run staging:db:seed

# Clean database
npm run staging:db:clean

# Clean and reseed database
npm run staging:db:reseed
```

## Seeded Data

The seeding process (`prisma/seed.ts`) creates:

1. **Cloud Providers**:
   - Basic information (name, display name, logo URL)
   - Created in all environments
   - Preserved during reseeding

2. **Test Data** (Development/Staging Only):
   - Test votes
   - Initial vote counts
   - System configurations

3. **System Configurations**:
   - Daily vote limits
   - Other system settings

## Modifying Seed Data

### Understanding `prisma/seed.ts`

The seed script is responsible for populating the database with initial data. Here's a breakdown of its components:

1. **Cloud Providers Configuration**
   ```typescript
   const providers = [
     {
       name: 'aws',           // Unique identifier
       displayName: 'Amazon Web Services',  // Display name in UI
       logoUrl: '/cloud-providers/aws.svg', // Path to logo in public directory
     },
     // Add more providers here
   ];
   ```

2. **Test Data Configuration** (Development/Staging Only)
   ```typescript
   const testUsers = [
     { id: 'test-user-1', email: 'test1@example.com' },
     // Add more test users here
   ];

   const testVoteDistribution = {
     'aws': 3,      // 3 votes for AWS
     'gcp': 2,      // 2 votes for GCP
     'azure': 1,    // 1 vote for Azure
   };
   ```

3. **System Configurations**
   ```typescript
   const configs = [
     {
       key: 'DAILY_VOTE_LIMIT',
       value: '3',
       description: 'Maximum number of vote changes allowed per user per day',
     },
     // Add other system configs here
   ];
   ```

### Adding a New Cloud Provider

1. **Prepare Logo**
   - Add provider logo to `/public/cloud-providers/`
   - Support formats: SVG (preferred) or PNG
   - Follow naming convention: lowercase, no spaces

2. **Add Provider to `seed.ts`**
   ```typescript
   const providers = [
     // ... existing providers ...
     {
       name: 'newprovider',
       displayName: 'New Cloud Provider',
       logoUrl: '/cloud-providers/newprovider.svg',
     },
   ];
   ```

3. **Reseed Database**
   ```bash
   # Development
   npm run local:db:reseed

   # Staging
   npm run staging:db:reseed
   ```

### Modifying System Configurations

1. **Add New Configuration**
   ```typescript
   const configs = [
     // ... existing configs ...
     {
       key: 'NEW_CONFIG_KEY',
       value: 'default_value',
       description: 'Description of what this config does',
     },
   ];
   ```

2. **Update Existing Configuration**
   - Find the configuration in the `configs` array
   - Modify the `value` or `description`
   - Reseed database to apply changes

### Environment-Specific Seeding

The script behaves differently based on `APP_ENV`:

1. **Development/Staging**
   - Seeds all providers
   - Creates test users and votes
   - Sets up system configurations
   - Initializes vote counts

2. **Production**
   - Only seeds providers
   - No test data
   - Basic system configurations
   - Zero vote counts

### Safety Features

1. **Data Protection**
   ```typescript
   if (process.env.APP_ENV === 'production') {
     console.error('Seed command can only be run in development or staging mode');
     process.exit(1);
   }
   ```

2. **Transaction Safety**
   - All operations are wrapped in transactions
   - Rollback on failure
   - Prevents partial seeding

3. **Unique Constraints**
   - Provider names must be unique
   - System config keys must be unique
   - Prevents duplicate entries

### Troubleshooting Seed Issues

1. **Schema Conflicts**
   ```bash
   # Reset schema and reseed
   npm run local:db:push
   npm run local:db:reseed
   ```

2. **Data Inconsistencies**
   ```bash
   # Clean and start fresh
   npm run local:db:clean
   npm run local:db:seed
   ```

3. **Common Errors**
   - Duplicate provider names
   - Invalid logo paths
   - Missing environment variables

For more details about the database structure and models, see [Voting System](voting.md#database-structure).

## Admin Interface

The admin dashboard provides a UI for database management:

1. **Access**: Only available in development and staging environments
2. **Location**: Admin Dashboard → Database Management
3. **Features**:
   - View current environment
   - Reseed database with confirmation
   - Warning about data loss

## Safety Features

1. **Environment Protection**:
   - Reseeding disabled in production
   - Clean commands only work in development/staging

2. **Data Preservation**:
   - Cloud provider data is preserved
   - Reseeding requires confirmation
   - Clear warnings about data loss

3. **Concurrency Handling**:
   - Uses transactions for data consistency
   - Handles concurrent operations safely
   - Prevents duplicate entries

## Troubleshooting

1. **Database Connection Issues**:
   ```bash
   # Check MongoDB status
   npm run local:db:status
   
   # Restart MongoDB
   npm run local:db:restart
   ```

2. **Seed Failures**:
   - Check MongoDB connection
   - Verify environment variables
   - Check for schema conflicts

3. **Data Inconsistencies**:
   ```bash
   # Clean and reseed
   npm run local:db:reseed
   ```

## Admin Configuration

To add admin users to the system, you must configure them in the `.env` file:

```bash
# Comma-separated list of admin email addresses
ADMIN_EMAILS="admin@example.com,another-admin@example.com"
```

Only users with emails listed in `ADMIN_EMAILS` will have access to:
- Admin dashboard
- Database management features
- System configuration
- Analytics

For more details about the authentication system and how admin access is enforced, see [Authentication](authentication.md).

Remember to:
1. Add admin emails before deploying
2. Keep the `.env` file secure
3. Use the exact email that matches the OAuth provider (GitHub/Google)

## Related Documentation

- [Authentication](authentication.md) - Details about user authentication and admin access control
- [Voting System](voting.md) - Information about the database models and their relationships 