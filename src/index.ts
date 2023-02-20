import type { Plugin } from "rollup"

type Entri = { [key: string]: string }
type Entri2 = { find: string; replacement: string }
interface AliasOptions {
  entries: Entri2[] | Entri
}

function alias(options: AliasOptions): Plugin {
  const entries = getEntries(options.entries)
  return {
    name: "alias",
    resolveId(source: string, importer: string | undefined) {
      // console.log("source, importer", source, importer)

      if (!importer) return null

      const matchedEntry = entries.find(entry => matches(entry.find, source))

      if (!matchedEntry) {
        return null
      }

      const updateId = source.replace(
        matchedEntry.find,
        matchedEntry.replacement
      )
      console.log("updateId::::::", updateId)

      // return this.resolve(updateId + ".js", importer).then(
      //   resolved => resolved || { id: updateId }
      // )

      return updateId + ".js"
    },
  }
}

export { alias }

function getEntries(entries: AliasOptions["entries"]): Entri2[] {
  if (Array.isArray(entries)) {
    return entries
  } else {
    return Object.entries(entries).map(([key, value]) => ({
      // key转换为findd,  value转换为replacement
      find: key,
      replacement: value,
    }))
  }
}

function matches(pattern: string | RegExp, importee: string) {
  if (pattern instanceof RegExp) {
    return pattern.test(importee)
  }

  if (importee.length < pattern.length) {
    return false
  }

  if (importee === pattern) {
    return true
  }

  return importee.startsWith(pattern + "/")
}
