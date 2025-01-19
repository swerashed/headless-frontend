/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'staging.notionhive.com',
          },
          {
            protocol: 'http',
            hostname: 'aks-pharma.local',
          },
        ],
      },
};

export default nextConfig;
