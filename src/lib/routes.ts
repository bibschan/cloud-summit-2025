export const routes = {
  api: {
    admin: {
      config: {
        voteLimit: '/api/admin/config/vote-limit',
      },
      providers: '/api/admin/providers',
      analytics: '/api/admin/analytics',
      logos: '/api/admin/logos',
    },
    vote: {
      base: '/api/vote',
      current: '/api/vote/current',
    },
    providers: '/api/providers',
    health: '/api/health',
  },
  pages: {
    admin: '/admin',
    vote: '/vote',
    auth: {
      signin: '/auth/signin',
    },
  },
} as const;

// Type-safe route getter
export function getRoute<T>(path: string): T {
  return path as T;
} 