import { App } from "./App"
import { renderToString } from "react-dom/server"

export const render = () => {
  return renderToString(<App />)
}
