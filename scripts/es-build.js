import { buildConfig } from "./config/buildConfig";
import esbuild from "rollup-plugin-esbuild";
const esOutput = Object.entries(buildConfig).map(([module, config]) => {
  return {
    format: config.format,
    dir: config.output.path,
    // exports: module === 'cjs'? 'named': 'none',
    // preserveModules: true,
    // preserveModulesRoot: '.',
    sourcemap: true,
  };
});
export default [
  {
    input: ["eslintBaseConfig.js"],
    output: esOutput,
    plugins: [
      esbuild({
        sourceMap: true,
        target: "es2018",
      })
    ],
    // external: {},
    treeshake: false,
  },
];
