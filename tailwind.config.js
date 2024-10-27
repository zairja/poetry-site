module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            {
              nord: {
                ...require("daisyui/src/theming/themes")["nord"],
                "base-100": "#ebfff2",
                "primary": "#284467",
                "secondary": "#284467",
              },
            },
          ],
    },
    plugins: [require('daisyui')]
};
