import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'
import pluginReact from '@vitejs/plugin-react'
import { PACKAGE_ROOT } from './constants'
import { resolveConfig } from './config'
import { pluginConfig } from './plugin-3mdoc/config'

export async function createDevServer(root: string) {
  const config = await resolveConfig(root, 'serve', 'development')
  console.log(`[3mdoc] ${config}`)

  return createServer({
    root,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config)
    ],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  })
}