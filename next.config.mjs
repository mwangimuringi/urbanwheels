/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
