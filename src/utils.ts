import type { ConfigItem } from './types'

/**
 * Combine array and non-array configs into a single array.
 */
export function combine(...configs: (ConfigItem | ConfigItem[])[]): ConfigItem[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}

export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) {
          return [to + key.slice(from.length), value]
        }
        return [key, value]
      }),
  )
}
