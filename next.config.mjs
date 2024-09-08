/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/out" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : undefined,
};
export default nextConfig;
