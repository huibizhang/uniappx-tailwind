import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { uniTailwindWatcher } from './vite-plugin-uni-tailwindcss-watcher.js'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [uni(),uniTailwindWatcher()],
});
