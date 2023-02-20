import type { Plugin } from 'rollup'

function alias(options: any): Plugin {
  return {
    name: 'alias',
    resolveId(source: string, importer: string | undefined) {
      console.log('source, importer', source, importer)
    }
  }
}


// function alias(options) {
//   return {
//     name: 'alias',
//     resolveId(source, importer) {
//       console.log('source, importer', source, importer)
//     }
//   }
// }

export { alias }