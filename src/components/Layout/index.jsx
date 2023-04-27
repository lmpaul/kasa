import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Layout({children}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
