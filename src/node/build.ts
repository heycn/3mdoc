import { build as viteBuild } from "vite"
import type { InlineConfig } from "vite"
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants"

// 1. 把 client 端 和 server 端 进行打包，分别运行在客户端和服务端
export async function bundle(root: string) {
  try {
    const resolveViteConfig = (isServer: boolean): InlineConfig => ({
      mode: "production",
      root,
      build: {
        ssr: isServer,
        outDir: isServer ? '.temp' : 'build',
        rollupOptions: {
          input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
          output: {
            format: isServer ? "cjs" : "esm"
          }
        }
      }
    })
    const clientBuild = async () => viteBuild(resolveViteConfig(false))
    const serverBuild = async () => viteBuild(resolveViteConfig(true))

    console.log("[3mdoc] Building client + server bun bundles...")
    await clientBuild()
    await serverBuild()
  } catch (e) {
    console.log(`[3mdoc] ${e}`)
  }
}

export async function build(root: string) {
  // 1. 把 client 端 和 server 端 进行打包，分别运行在客户端和服务端
  await bundle(root)
  // 2. 引入 server-entry 入口模块
  // 3. 服务端渲染，输出 HTML
}