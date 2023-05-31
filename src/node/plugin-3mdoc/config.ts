import { Plugin } from 'vite'
import { SiteConfig } from 'shared/types/index'

const SITE_DATA_ID = '3mdoc:site-data'

export function pluginConfig(config: SiteConfig): Plugin {
  return {
    name: '3mdoc:config',
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`
      }
    }
  }
}
