const requiredEnvVars = [
  'DATABASE_URL',
  'GITHUB_ID',
  'GITHUB_SECRET',
  'GOOGLE_ID',
  'GOOGLE_SECRET',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
] as const;

type EnvVar = (typeof requiredEnvVars)[number];

// Validate environment variables at build time
function validateEnv() {
  const missingVars: EnvVar[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingVars
        .map((v) => `  - ${v}`)
        .join('\n')}`
    );
  }

  // Validate DATABASE_URL format
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl?.startsWith('mongodb://') && !dbUrl?.startsWith('mongodb+srv://')) {
    throw new Error('DATABASE_URL must be a valid MongoDB connection string');
  }
}

// Run validation
validateEnv();

// Export validated environment variables
export const env = {
  databaseUrl: process.env.DATABASE_URL!,
  githubId: process.env.GITHUB_ID!,
  githubSecret: process.env.GITHUB_SECRET!,
  googleId: process.env.GOOGLE_ID!,
  googleSecret: process.env.GOOGLE_SECRET!,
  nextAuthUrl: process.env.NEXTAUTH_URL!,
  nextAuthSecret: process.env.NEXTAUTH_SECRET!,
} as const; 