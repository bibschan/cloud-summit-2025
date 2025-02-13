export const routes = {
  api: {
    admin: {
      config: {
        voteLimit: '/api/admin/config/vote-limit',
        base: '/api/admin/config',
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
export function getRoute<T extends string>(path: keyof typeof routes | string): T {
  if (typeof path === 'string') {
    return path as T;
  }
  return routes[path] as T;
} 