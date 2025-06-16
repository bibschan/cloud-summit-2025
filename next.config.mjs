/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side rendering for static export
  trailingSlash: true,

  // Add other static export configurations
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },

  // Skip API routes in static export
  skipTrailingSlashRedirect: true,

  // Disable middleware for static export
  experimental: {
    outputFileTracingExcludes: {
      "*": ["node_modules/**/*"],
    },
  },

  // Disable server-side rendering for specific pages
  // that use dynamic features
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

// List of pages that should be excluded from static generation
const excludedPages = [
  "/admin",
  "/auth/signin",
  "/vote",
  // Add other dynamic routes here
];

// Generate static paths for dynamic routes
const generateStaticParams = async () => {
  return excludedPages.map((path) => ({
    params: { path: [path.replace(/^\//, "")] },
  }));
};

export default nextConfig;
