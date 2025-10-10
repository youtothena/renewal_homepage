const nextConfig = {
  compiler: {
    emotion: true,
  },

  // 이미지 최적화
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;