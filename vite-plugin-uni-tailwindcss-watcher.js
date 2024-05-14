import { exec } from 'node:child_process';
import {resolve} from 'path'


export const uniTailwindWatcher = () => ({
  name: 'uni-tailwindcss-watcher',
  configureServer(server) {
	console.log("===== uni-tailwindcss-watcher ====")
	exec(`cd ${__dirname} && npx tailwindcss -i ./tailwind.css -o ./common/main.css -w`, (error, stdout, stderr) => {
	  console.log(stdout)
	})
  },
})