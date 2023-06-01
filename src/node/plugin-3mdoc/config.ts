import { Plugin } from 'vite'
import { SiteConfig } from 'shared/types/index'
import { join, relative } from 'path'
import { PACKAGE_ROOT } from '../../node/constants'

const SITE_DATA_ID = '3mdoc:site-data'

export function pluginConfig(
  config: SiteConfig,
  restartServer?: () => Promise<void>
): Plugin {
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
    },
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            '@runtime': join(PACKAGE_ROOT, 'src', 'runtime', 'index.ts')
          }
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly'
          }
        }
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath]
      const include = (id: string) => customWatchedFiles.some((file) => id.includes(file))
      if (include(ctx.file)) {
        console.log(`[3mdoc]\n${relative(config.root, ctx.file)} changed, restarting server...`)
        await restartServer()
      }
    }
  }
}
