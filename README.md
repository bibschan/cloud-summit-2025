# Cloud Summit 2025

A secure voting platform that enables authenticated users to vote for their preferred cloud provider.

## Quick Start

1. **Clone and Configure**
```bash
git clone https://github.com/yourusername/cloud-summit-2025.git
cd cloud-summit-2025
cp .env.example .env.local
# Edit .env.local with your values
```

2. **Setup and Run**
```bash
npm run local:setup  # Installs dependencies, stops any running MongoDB instance, sets up fresh DB
npm run dev         # Starts development server
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

### Environments
- **Local**: Development environment with local MongoDB
- **Staging**: Railway deployment from `voting-system` branch
- **Production**: Vercel deployment from `main` branch

### Prerequisites
- Node.js and npm
- macOS (for local MongoDB setup)
- [Homebrew](https://brew.sh/) package manager
- At least 1GB of free disk space
- GitHub account (for authentication)
- Google Cloud account (for authentication)

## Available Scripts

### Common Commands
```bash
npm run dev    # Start development server (runs local:dev)
npm run start  # Start production server (runs prod:start)
npm run build  # Build for production (runs prod:build)
npm run lint   # Run ESLint (runs local:lint)
```

### Local Development
```bash
# Core Commands
npm run local:dev     # Start development server
npm run local:start   # Start production server locally
npm run local:build   # Build for local testing
npm run local:lint    # Run ESLint

# Setup and Reset
npm run local:setup   # Complete first-time setup (stops MongoDB if running, installs, sets up fresh DB)

# MongoDB Service
npm run local:db:start    # Start MongoDB service
npm run local:db:stop     # Stop MongoDB service
npm run local:db:restart  # Restart MongoDB service

# Database Management
npm run local:db:setup    # Set up local MongoDB
npm run local:db:push     # Push schema to database
npm run local:db:seed     # Seed development data
npm run local:db:clean    # Clean development data
npm run local:db:studio   # Open database GUI
```

### Staging Environment (Railway)
```bash
# Core Commands
npm run staging:build    # Build for Railway (includes Prisma)
npm run staging:start    # Start on Railway

# Database Management
npm run staging:db:seed  # Seed staging data
npm run staging:db:clean # Clean staging data
```

### Production Environment (Vercel)
```bash
npm run prod:build      # Build for production
npm run prod:start      # Start production server
```

## Local MongoDB Management

### Daily Operations
1. **Starting Fresh**
```bash
npm run local:setup   # Stops existing MongoDB, sets up fresh instance
npm run dev          # Start development server
```

2. **Regular Start**
```bash
npm run local:db:start  # Start MongoDB
npm run dev            # Start development server
```

3. **Ending Development**
```bash
# Stop the development server (Ctrl+C)
npm run local:db:stop   # Stop MongoDB
```

### Database Management
- **View Data**: `npm run local:db:studio`
- **Reset Data**: `npm run local:db:clean && npm run local:db:seed`
- **Update Schema**: `npm run local:db:push`

### Troubleshooting

1. **MongoDB Won't Start**
```bash
# Check status
brew services list | grep mongodb

# Restart service
npm run local:db:restart

# Check logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log
```

2. **Port Already in Use**
```bash
# Check port
lsof -i :27017

# Stop MongoDB
npm run local:db:stop
```

3. **Connection Failed**
```bash
# Verify service
brew services list | grep mongodb

# Test connection
mongosh --eval "db.runCommand({ ping: 1 })"
```

## Deployment Guide

### Local Development

1. **Database Setup**
```bash
npm run local:db:setup
npm run local:db:push
npm run local:db:seed
```

2. **Start Development**
```bash
npm run local:dev  # or npm run dev
```

### Staging (Railway)

1. **Prerequisites**
   - Railway account
   - Access to project's Railway team
   - MongoDB add-on in Railway

2. **Environment Setup**
   - Configure in Railway dashboard:
     ```env
     DATABASE_URL=<railway-mongodb-url>
     GITHUB_ID=<staging-github-id>
     GITHUB_SECRET=<staging-github-secret>
     GOOGLE_ID=<staging-google-id>
     GOOGLE_SECRET=<staging-google-secret>
     NEXTAUTH_URL=<railway-app-url>
     NEXTAUTH_SECRET=<your-secret>
     ```

3. **Deployment**
   - Push to `voting-system` branch
   - Railway automatically:
     - Runs `staging:build` (includes Prisma generation)
     - Deploys the application
   - Run `npm run staging:db:seed` if needed

### Production (Vercel)

1. **Prerequisites**
   - Vercel account
   - MongoDB Atlas cluster
   - Production OAuth credentials

2. **Environment Setup**
   - Configure in Vercel dashboard:
     ```env
     DATABASE_URL=<atlas-mongodb-url>
     GITHUB_ID=<prod-github-id>
     GITHUB_SECRET=<prod-github-secret>
     GOOGLE_ID=<prod-google-id>
     GOOGLE_SECRET=<prod-google-secret>
     NEXTAUTH_URL=<production-domain>
     NEXTAUTH_SECRET=<your-secret>
     ```

3. **Deployment**
   - Push to `main` branch
   - Vercel automatically:
     - Runs `prod:build`
     - Generates Prisma client
     - Deploys the application

## Environment Configuration

### Local Development (.env.local)
```env
DATABASE_URL=mongodb://localhost:27017/cloud-summit
GITHUB_ID=<github-oauth-id>
GITHUB_SECRET=<github-oauth-secret>
GOOGLE_ID=<google-oauth-id>
GOOGLE_SECRET=<google-oauth-secret>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generated-secret>
```

### Staging (Railway)
- MongoDB URL provided by Railway add-on
- OAuth credentials for staging environment
- NEXTAUTH_URL points to Railway deployment

### Production (Vercel)
- MongoDB Atlas connection string
- Production OAuth credentials
- NEXTAUTH_URL points to production domain

## Documentation

### Core Documentation
- [Voting System](docs/voting.md)
  - Database models and relationships
  - API endpoints
  - Voting process flow
  - Error handling
  - Security measures

- [Authentication](docs/authentication.md)
  - OAuth configuration
  - Session management
  - Protected routes
  - Security measures
  - Development guidelines

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
