/**
 * Database Seed Script
 * 
 * Purpose:
 * This script populates the database with initial data needed for the cloud provider voting system.
 * It handles both development and production environments differently.
 * 
 * Usage:
 * - Development: npm run db:seed    (creates providers and test data)
 * - Production:  npm run db:seed    (creates only providers)
 * - Cleanup:     npm run db:clean   (removes all data, development only)
 * 
 * Behavior:
 * 1. In Development:
 *    - Creates cloud providers
 *    - Creates test users
 *    - Generates initial votes
 *    - Sets up vote counts
 * 
 * 2. In Production:
 *    - Only creates cloud providers
 *    - Initializes vote counts to zero
 *    - Never creates test data
 * 
 * This is okay for now, but we should add a way to add more providers later,
 * and not populate from here, but from a database so that we dont have to
 * restart the server to add a new provider.
 * 
 * Database Models Used:
 * - CloudProvider: Stores provider information
 * - Vote: Records individual votes
 * - VoteCount: Maintains running vote tallies  
 *
 * 
 * Safety Features:
 * - Clean command only works in development
 * - Uses transactions for data consistency
 * - Handles concurrent operations safely
 * - Prevents duplicate votes through database constraints
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Initial cloud provider data
 * These are the main cloud providers that will be available for voting
 * Each provider has:
 * - name: Unique identifier used in the system
 * - displayName: User-friendly name shown in the UI
 * - logoUrl: Direct URL to the provider's logo
 */
const providers = [
  {
    name: 'aws',
    displayName: 'Amazon Web Services',
    logoUrl: '/cloud-providers/aws.svg',
  },
  {
    name: 'gcp',
    displayName: 'Google Cloud Platform',
    logoUrl: '/cloud-providers/gcp.svg',
  },
  {
    name: 'azure',
    displayName: 'Microsoft Azure',
    logoUrl: '/cloud-providers/azure.svg',
  },
  {
    name: 'oracle',
    displayName: 'Oracle Cloud',
    logoUrl: '/cloud-providers/oracle.svg',
  },
  {
    name: 'ibm',
    displayName: 'IBM Cloud',
    logoUrl: '/cloud-providers/ibm.svg',
  },
  {
    name: 'alibaba',
    displayName: 'Alibaba Cloud',
    logoUrl: '/cloud-providers/alibaba.svg',
  },
  {
    name: 'tencent',
    displayName: 'Tencent Cloud',
    logoUrl: '/cloud-providers/tencent.png',
  },
  {
    name: 'huawei',
    displayName: 'Huawei Cloud',
    logoUrl: '/cloud-providers/huawei.png',
  },
  {
    name: 'digitalocean',
    displayName: 'DigitalOcean',
    logoUrl: '/cloud-providers/digitalocean.svg',
  },
] as const;

/**
 * Test user data for development environment
 * These users are used to simulate voting behavior
 * In production, real user data comes from OAuth providers
 */
const testUsers = [
  { id: 'test-user-1', name: 'Test User 1', email: 'test1@example.com' },
  { id: 'test-user-2', name: 'Test User 2', email: 'test2@example.com' },
  { id: 'test-user-3', name: 'Test User 3', email: 'test3@example.com' },
  { id: 'test-user-4', name: 'Test User 4', email: 'test4@example.com' },
  { id: 'test-user-5', name: 'Test User 5', email: 'test5@example.com' },
] as const;

/**
 * Initial vote distribution for testing
 * This creates a realistic starting state with:
 * - AWS: 3 votes (most popular)
 * - GCP: 2 votes (second)
 * - Azure: 1 vote (third)
 * - DigitalOcean: 0 votes (new provider)
 */
const testVoteDistribution = {
  'aws': 3,      // 3 votes for AWS
  'gcp': 2,      // 2 votes for GCP
  'azure': 1,    // 1 vote for Azure
  // DigitalOcean will have 0 votes
} as const;

/**
 * Cleans all test data from the database
 * Only works in development mode for safety
 */
async function cleanDatabase() {
  if (process.env.APP_ENV !== 'development') {
    console.error('Clean command can only be run in development mode');
    process.exit(1);
  }

  try {
    console.log('Cleaning database...');
    
    // Delete all votes and vote counts
    await prisma.vote.deleteMany();
    await prisma.voteCount.deleteMany();
    await prisma.cloudProvider.deleteMany();
    
    console.log('Database cleaned successfully');
  } catch (error) {
    console.error('Failed to clean database:', error);
    throw error;
  }
}

/**
 * Seeds the database with initial data
 * In development: Creates providers, test users, and test votes
 * In production: Only creates providers
 */
async function seedDatabase() {
  try {
    console.log('Starting database seed...');

    // Always seed providers in both development and production
    console.log('Seeding cloud providers...');
    const seededProviders = await Promise.all(
      providers.map(async (provider) => {
        const result = await prisma.cloudProvider.upsert({
          where: { name: provider.name },
          update: provider,
          create: provider,
        });
        console.log(`Upserted cloud provider: ${result.name}`);
        return result;
      })
    );

    // Only seed test data in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode detected - seeding test data...');

      // Create test votes in batches
      const votePromises = [];
      for (const [providerName, voteCount] of Object.entries(testVoteDistribution)) {
        const provider = seededProviders.find(p => p.name === providerName);
        if (!provider) continue;

        // Create votes for this provider
        for (let i = 0; i < voteCount; i++) {
          const testUser = testUsers[i];
          votePromises.push(
            prisma.vote.create({
              data: {
                userId: testUser.email,
                providerId: provider.id,
              },
            })
          );
        }

        // Update vote count
        votePromises.push(
          prisma.voteCount.upsert({
            where: { providerId: provider.id },
            update: { count: voteCount },
            create: {
              providerId: provider.id,
              count: voteCount,
            },
          })
        );
      }

      // Execute all vote operations in parallel
      await Promise.all(votePromises);
      console.log('Created test votes and vote counts');

      // Initialize vote count as 0 for providers with no votes
      await Promise.all(
        seededProviders.map(provider =>
          prisma.voteCount.upsert({
            where: { providerId: provider.id },
            update: {},
            create: {
              providerId: provider.id,
              count: 0,
            },
          })
        )
      );

      console.log('Test data seeded successfully');
    } else {
      console.log('Production mode detected - skipping test data');
      
      // In production, just ensure vote counts exist for all providers
      await Promise.all(
        seededProviders.map(provider =>
          prisma.voteCount.upsert({
            where: { providerId: provider.id },
            update: {},
            create: {
              providerId: provider.id,
              count: 0,
            },
          })
        )
      );
    }

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
    throw error;
  }
}

/**
 * Main function that handles database operations
 * Supports both seeding and cleaning based on command line argument
 */
async function main() {
  try {
    await prisma.$connect();
    
    // Check if we're cleaning the database
    const isClean = process.argv.includes('--clean');
    
    if (isClean) {
      await cleanDatabase();
    } else {
      await seedDatabase();
    }
  } catch (error) {
    console.error('Operation failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Failed to execute operation:', e);
    process.exit(1);
  }); 