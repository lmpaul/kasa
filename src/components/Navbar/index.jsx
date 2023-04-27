import Logo from '../../assets/images/logo.png'
import styles from './Navbar.module.css'

function NavBar() {

  return(
    <div className={styles.navbar}>
      <div className={styles['navbar__logo-container']}>
        <img src={Logo} alt="Kasa logo" />
      </div>
      <div className={styles['navbar__links-container']}>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </div>
    </div>
  )

}

export default NavBar
