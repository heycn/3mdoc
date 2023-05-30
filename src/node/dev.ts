import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'
import pluginReact from '@vitejs/plugin-react'

export const createDevServer = (root: string) => createServer({
  root,
  plugins: [
    pluginIndexHtml(),
    pluginReact()
  ]
})