/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: [
      // "ohm.s3.amazonaws.com",
      // "memesakeawsbucket.s3.ap-south-1.amazonaws.com",
      // "simbatestbucket1.s3.ap-south-1.amazonaws.com",

      "simbatestbucket1.s3.ap-south-1.amazonaws.com",
      "img.icons8.com",
      "woodandvilla.s3.ca-central-1.amazonaws.com",
      // "i.dummyjson.com",
    ],
  },

  reactStrictMode: false,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
