import typescriptPlugin from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { alias }  from './src/plugins/alias'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [typescriptPlugin({
    module: "esnext",
      declaration: true,
      outDir: "./dist",
  }), alias()]
})
