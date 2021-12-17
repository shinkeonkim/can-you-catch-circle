import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases';

const aliases = ViteAliases({
  prefix: '@',
  dir: 'src',
  deep: true,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), aliases]
})
