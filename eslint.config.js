// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
    antfu(
        {
            unocss: true,
            formatters: true,
            stylistic: {
                indent: 4,
            },
            yaml: false,
        },
        {
            files: ['**/*.vue'],
            rules: {
                'vue/padding-line-between-tags': [
                    'error',
                    [{ blankLine: 'always', next: '*', prev: '*' }],
                ],
            },
        },
    ),
)
