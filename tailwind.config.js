/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,ts,uts,vue,uvue}',
	'./pages/**/*.{js,ts,uts,vue,uvue}',
    './App.uvue',
	'./index.html',
  ],
  presets: [ require('./tailwind-preset.js')],
  theme: {
	  line: {
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
	  }
  },
  plugins: [
	plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          line: (value) => ({
            line: value,
          }),
        },
        {
          values: theme('line'),
        },
      )
    }),
  ],
}

