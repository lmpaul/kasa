import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
