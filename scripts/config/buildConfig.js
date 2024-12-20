import paths from 'path'
export const buildConfig = {
  esm: {
    module: "ESNext",
    format: "esm",
    ext: "mjs",
    output: {
      name: "es",
      path: paths.resolve("lib", "esm"),
    },
  },
  cjs: {
    module: "CommonJs",
    format: "cjs",
    ext: "js",
    output: {
      name: "lib",
      path: paths.resolve("lib", "cjs"),
    },
  }
};
