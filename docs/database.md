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

To modify the seed data:

1. Open `prisma/seed.ts`
2. Locate the relevant section:
   ```typescript
   const providers = [
     {
       name: 'aws',
       displayName: 'Amazon Web Services',
       logoUrl: '/cloud-providers/aws.svg',
     },
     // Add more providers here
   ];
   ```
3. Make your changes
4. Run the appropriate reseed command for your environment

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