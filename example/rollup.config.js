import { defineConfig } from "rollup"
import { alias } from "plugin-alias"

export default defineConfig({
  input: "index.js",
  output: {
    file: "./dist/index.js",
    format: "es",
  },
  plugins: [
    alias({
      entries: {
        "!": "./utils",
      },
    }),
  ],
})
