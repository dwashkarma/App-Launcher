const packageJson = require("./package.json");

import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],

  plugins: [
    PeerDepsExternalPlugin(),
    nodeResolve(),
    commonJs(),
    terser(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
  external: ["react", "react-dom"],
};
