module.exports = {
  extends: [
    '@kurosame/eslint-config-vue',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  settings: {
    'import/core-modules': ['vue']
  }
}
