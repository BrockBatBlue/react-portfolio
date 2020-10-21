const tailwindcss = require("tailwindcss");

module.expoerts = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
