module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    "object-to-json-parse",
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
