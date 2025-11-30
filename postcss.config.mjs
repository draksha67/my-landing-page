// postcss.config.mjs

export default {
  plugins: {
    // 1. This uses the correct v4 plugin
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {}, 
  },
}