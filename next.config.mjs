/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*', // 클라이언트가 요청하는 경로
                destination: 'http://localhost:8080/:path*', // 실제 API 서버 주소 (예: localhost)
            },
        ];
    },
};
// next.config.js


export default nextConfig;
