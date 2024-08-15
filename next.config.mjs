/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    images: {
        domains: ['cdn.images.remotePatterns']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};
export default nextConfig;
