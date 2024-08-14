/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.images.remotePatterns']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
