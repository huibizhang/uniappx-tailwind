import { exec } from 'node:child_process';
import {resolve} from 'path'

const build = () => {
	console.log("[build] ===== uni-tailwindcss-watcher ====")
	exec(`cd ${__dirname} && npx tailwindcss -i ./tailwind.css -o ./common/main.css`, (error, stdout, stderr) => {
	  // console.log(stdout)
	})
}

export const uniTailwindWatcher = () => ({
  name: 'uni-tailwindcss-watcher',
  configureServer: () => build(),
  handleHotUpdate:() => build()
})