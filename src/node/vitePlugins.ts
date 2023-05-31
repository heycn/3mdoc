import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'
import pluginReact from '@vitejs/plugin-react'
import { pluginConfig } from './plugin-3mdoc/config'
import { pluginRoutes } from './plugin-routes'
import { SiteConfig } from 'shared/types'
import { pluginMdx } from './plugin-mdx'

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic'
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
      isSSR
    }),
    await pluginMdx()
  ]
}