import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'

export function createDevServer(root: string) {
  return createServer({
    root,
    plugins: [pluginIndexHtml()]
  })
}
