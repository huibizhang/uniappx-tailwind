/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,uts,vue,uvue}',
	'./pages/**/*.{js,ts,uts,vue,uvue}',
    './App.uvue',
	'./index.html',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

