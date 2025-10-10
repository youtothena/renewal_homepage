const nextConfig = {
  /* config options here */
  compiler: {
    emotion: true,
  },
  
  // scripts 디렉토리를 빌드에서 제외
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'scripts/**': 'commonjs scripts/**',
      });
    }
    
    return config;
  },
  
  // TypeScript 컴파일 제외
  typescript: {
    ignoreBuildErrors: false,
  },
  pageExtensions: 'page.tsx',

};

export default nextConfig;