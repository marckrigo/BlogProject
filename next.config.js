module.exports = {
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    REACT_AAP_ACCESSKEY: 'KQj9BxHr_XHNTqAea0I7oxX-HcNCeaQ8nxmP9MNHkC8',
  },
}