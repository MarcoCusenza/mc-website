/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/mc-website",
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/mc-website",
  //       basePath: false,
  //       permanent: false,
  //     },
  //     // {
  //     //   source: "/mc-website",
  //     //   destination: "/mc-website",
  //     //   basePath: false,
  //     //   permanent: true,
  //     // },
  //   ];
  // },
};

module.exports = nextConfig;
