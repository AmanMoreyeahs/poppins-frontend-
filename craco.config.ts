// const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");
module.exports = {
  // plugins: [
  //   {
  //     plugin: CracoLessPlugin,
  //     options: {
  //       lessLoaderOptions: {
  //         lessOptions: {
  //           modifyVars: {
  //             "@primaryPurple": "#974098",
  //             "@link-color": "#4668D6",
  //             "@primary": "#974098"
  //           },
  //           javascriptEnabled: true,
  //         },
  //       },
  //     },
  //   },
  // ],
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#974098",
          "@link-color": "#1DA57A",
        },
      },
    },
  ],
};
export {};
