import { useRoutes } from 'react-router-dom'
import { routes } from '3mdoc:routes'

export const Content = () => {
  const routeElement = useRoutes(routes)
  return routeElement
}
