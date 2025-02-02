This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Cloud Summit 2025

A secure voting platform that enables authenticated users to vote for their preferred cloud provider.

## Available Scripts

### Development

```bash
# Start the development server
npm run dev

# Build the application
npm run build

# Start the production server
npm run start

# Run ESLint for code linting
npm run lint
```

### Database Management

```bash
# Generate Prisma client (do it everytime schema.prisma gets changed)
npm run prisma:generate

# Push schema changes to database
npm run prisma:push

# Seed the database with initial data
# In development: Creates providers, test users, and test votes
# In production: Only creates providers (will be changed in the future)
npm run db:seed

# Clean the database (development only)
# Removes all data including votes, providers, and counts
npm run db:clean
```

## Documentation

Detailed system documentation is available in the `docs` folder:

### Core Documentation
- [Voting System](docs/voting.md) - Complete voting system documentation including:
  - Database models and relationships
  - API endpoints and usage
  - Voting process flow
  - Error handling
  - Security measures

- [Authentication](docs/authentication.md) - Authentication system details including:
  - OAuth configuration
  - Session management
  - Protected routes
  - Security measures
  - Development guidelines

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables:
```bash
cp .env.example .env
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Push the database schema:
```bash
npm run prisma:push
```

5. Seed the database:
```bash
npm run db:seed
```

6. Start the development server:
```bash
npm run dev
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
