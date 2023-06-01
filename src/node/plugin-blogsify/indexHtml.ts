import { Plugin } from 'vite'
import { readFile } from 'fs/promises'
import { CLIENT_ENTRY_PATH, DEFAULT_HTML_PATH } from '../constants'

export const pluginIndexHtml = (): Plugin => ({
  name: 'blogsify:index-html',
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: `/@fs/${CLIENT_ENTRY_PATH}`
          },
          injectTo: 'body'
        }
      ]
    }
  },
  configureServer(server) {
    return () => {
      server.middlewares.use(async (req, res) => {
        // 1. 读取 template.html 内容
        let content = await readFile(DEFAULT_HTML_PATH, 'utf-8')
        content = await server.transformIndexHtml(
          req.url,
          content,
          req.originalUrl
        )
        // 2. 响应 HTML 给浏览器
        res.setHeader('Content-Type', 'text/html')
        res.end(content)
      })
    }
  }
})