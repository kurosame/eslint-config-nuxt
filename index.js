module.exports = {
  extends: [
    '@kurosame/eslint-config-vue',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  settings: {
    'import/core-modules': ['vue']
  }
}