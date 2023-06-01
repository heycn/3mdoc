import { usePageData } from '../../runtime'
import { Nav } from '../components/Nav'
import '../styles/base.css'
import '../styles/vars.css'
import 'uno.css'
import { HomeLayout } from './HomeLayout'
import { DocLayout } from './DocLayout'


export function Layout() {
  const pageData = usePageData()
  const { pageType } = pageData
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />
    } else if (pageType === 'doc') {
      return <DocLayout />
    } else {
      return <div>404 页面</div>
    }
  }
  return (
    <div>
      <Nav />
      {getContent()}
    </div>
  )
}
