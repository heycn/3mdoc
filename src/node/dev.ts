import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'
import pluginReact from '@vitejs/plugin-react'
import { PACKAGE_ROOT } from './constants'
import { resolveConfig } from './config'
import { pluginConfig } from './plugin-3mdoc/config'

export async function createDevServer(
  root: string,
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development')
  console.log(config.siteData)

  return createServer({
    root,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer)
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  })
}