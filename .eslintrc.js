module.exports = {
  root: true,
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    M: 'readonly',
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 2,
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 0,
    'no-unused-vars': ['warn', { vars: 'all' }],
    'object-curly-spacing': ['warn', 'always'],
    'prettier/prettier': 'warn',
    'vue/name-property-casing': 'off',
    semi: ['warn', 'never'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
    },
  ],
};
