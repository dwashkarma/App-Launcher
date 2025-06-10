const packageJson = require("./package.json");
import inject from "@rollup/plugin-inject";

import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

export default [
  // ESM and CJS for npm users
  {
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
    external: ["react", "react-dom", "react-dom/client"],
  },

  // IIFE for CDN users
  {
    input: "src/cdn.tsx", // This should contain the `window.renderAppLauncher = function(...)` code
    output: {
      file: "dist/app-launcher.cdn.js",
      format: "iife",
      name: "AppLauncherGlobal", // required for IIFE/UMD builds
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-dom/client": "ReactDOM",
      },
      sourcemap: true,
    },
    plugins: [
      PeerDepsExternalPlugin(),
      nodeResolve(),
      commonJs(),
      inject({
        jsxRuntime: "react/jsx-runtime", // inject jsxRuntime import
      }),
      terser(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom", "react-dom/client"],
  },
];
