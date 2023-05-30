import { Plugin } from "vite";
import { readFile } from "fs/promises"
import { DEFAULT_TEMPLATE_PATH } from "../constants";

export const pluginIndexHtml = (): Plugin => ({
  name: "3mdoc:index-html",
  configureServer(server) {
    return () => {
      server.middlewares.use(async (req, res, next) => {
        // 1. 读取 template.html 内容
        const content = await readFile(DEFAULT_TEMPLATE_PATH, "utf-8")
        // 2. 响应 HTML 给浏览器
        res.setHeader("Content-Type", "text/html")
        res.end(content)
      })
    }
  }
})