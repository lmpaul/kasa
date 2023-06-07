import Logo from '../../assets/images/logo.png'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate()

  return(
    <div className={styles.navbar}>
      <div className={styles['navbar__logo-container']}>
        <img src={Logo} alt="Kasa logo" onClick={() => {navigate('/')}}/>
      </div>
      <div className={styles['navbar__links-container']}>
        <p onClick={() => {navigate('/')}}>Accueil</p>
        <p onClick={() => {navigate('/about')}}>À propos</p>
      </div>
    </div>
  )

}

export default NavBar
