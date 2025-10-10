const nextConfig = {
  /* config options here */
  compiler: {
    emotion: true,
  },

  // TypeScript 컴파일 제외
  typescript: {
    ignoreBuildErrors: false,
  }
};

export default nextConfig;