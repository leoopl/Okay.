/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },

  webpack(config) {
    config.output.crossOriginLoading = "anonymous";
    config.plugins.push(
      new SriPlugin({
        hashFuncNames: ["sha256", "sha384"],
        enabled: true,
      })
    );

    return config;
  },

  reactStrictMode: true,
  env: {},
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /ace-builds.*\/worker-.*$/,
      type: "asset/resource",
    });
    config.externals.push("pino-pretty", "lokijs", "encoding");

    return config;
  },
  redirects: async () => [
    {
      source: "/okay",
      destination: "/",
      permanent: true,
    },
  ],
};
// if (process.env.NODE_ENV === "development") {
//   console.log("info  - lanUrl:", `http://${require("address").ip()}:3000`);
// }
module.exports = nextConfig;
