import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]s?$/, /\.vue$/],
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: 'src/.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver()
      ],
      dts: './src/components.d.ts'
    })
  ]
})
