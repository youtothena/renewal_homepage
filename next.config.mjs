const nextConfig = {
  /* config options here */
  
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
  
  // 빌드 시 특정 디렉토리 제외
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => `page.${ext}`),
};

export default nextConfig;