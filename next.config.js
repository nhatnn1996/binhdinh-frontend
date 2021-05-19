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
  },
  variants: {
    extend: {
      pointerEvents: ["hover", "focus"],
    },
  },
  images: {
    domains: ["http://103.137.185.86:1337"],
  },
};
