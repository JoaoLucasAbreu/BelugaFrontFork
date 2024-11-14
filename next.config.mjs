/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    output: 'standalone',
    experimental:{
        optimizePackageImports: ["@chakra-ui/react"],
    },
    async redirects() {
        return [
            // Home page to time tracker
            {
                source: '/',
                destination: '/dashboard',
                permanent: false,
            },
        ]
    },
}

export default nextConfig;
