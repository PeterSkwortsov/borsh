/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    source: '/:path*',
    destination: '/',
};

export default nextConfig;

// const nextConfig = {
// images: { unoptimized: true }, // не работает
//     output: 'export',
// };