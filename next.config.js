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
    domains: ["https://admin.nuocnongthon.binhdinh.vn/"],
  },
};
