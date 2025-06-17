import { globalIgnores } from 'eslint/config'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'

import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^[a-zA-Z]'], // 普通 npm 包
            ['^@services'],
            ['^@hooks'],
            ['^@router'],
            ['^@stores'],
            ['^@common'],
            ['^@components'],
            ['^@views'],
            ['^@utils'],
            ['^@helper'],
            ['^@types'],
            ['^@locales'],
            ['^@styles'],
            ['^@images'],
            ['^[^.]'],
            ['^\\.\\.'], // 父目录相对路径
            ['^\\.'], // 当前目录相对路径
          ],
        },
      ],
    },
  },
)
