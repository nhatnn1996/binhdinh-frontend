const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "public/styles/variables")],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
    images: {
      domains: ["anhdepfree.com"],
    },
  },
  variants: {
    extend: {
      pointerEvents: ["hover", "focus"],
    },
  },
};
