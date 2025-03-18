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
            hostname: 'localhost',
          },
          {
            protocol: 'https',
            hostname: 'dashboard.akskhanpharma.com',
          },
         
        ],
      },
};

export default nextConfig;
