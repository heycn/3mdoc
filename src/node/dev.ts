import { createServer } from 'vite'
import { pluginIndexHtml } from './plugin-3mdoc/indexHtml'
import pluginReact from '@vitejs/plugin-react'
import { PACKAGE_ROOT } from './constants'

export const createDevServer = (root: string) => createServer({
  root,
  plugins: [
    pluginIndexHtml(),
    pluginReact()
  ],
  server: {
    fs: {
      allow: [PACKAGE_ROOT]
    }
  }
})