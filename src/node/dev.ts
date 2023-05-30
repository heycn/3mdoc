import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'

export const createDevServer = (root: string) => createServer({
  root,
  plugins: [pluginIndexHtml()]
})