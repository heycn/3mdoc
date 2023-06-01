import { App, initPageData } from './App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { DataContext } from './hooks'

export interface RenderResult {
  appHtml: string;
  propsData: unknown[];
  islandToPathMap: Record<string, string>;
}

// For ssr component render
export async function render(pagePath: string) {
  const pageData = await initPageData(pagePath)
  const { clearIslandData, data } = await import('./jsx-runtime')
  // 拿到 islands 组件相关数据
  const { islandProps, islandToPathMap } = data
  clearIslandData()
  const appHtml = renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  )
  return {
    appHtml,
    islandProps,
    islandToPathMap
  }
}

export { routes } from 'blogsify:routes'