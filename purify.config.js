const purify = require("purify-css");
const content = ["**/src/**/*.jsx", "**/public/*.html"]; // the contents to look at to determine css
const css = ["./src/component/App.css"]; // the css content you need to purify

const options = {
  // purified css
  // currently overwriting css with purified
  output: "./src/component/App.css",

  // Will minify CSS code in addition to purify.
  minify: false,

  // Logs out removed selectors.
  rejected: false
};

purify(content, css, options);
