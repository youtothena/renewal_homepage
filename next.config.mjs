const nextConfig = {
  /* config options here */
  compiler: {
    emotion: true,
  },

  // TypeScript 컴파일 제외
  typescript: {
    ignoreBuildErrors: false,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => `page.${ext}`)
};

export default nextConfig;