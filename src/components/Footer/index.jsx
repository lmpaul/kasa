import FooterLogo from '../../assets/images/logo-footer.png'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={FooterLogo} alt="Kasa logo" />
      <p> © 2020 Kasa. All rights reserved </p>
    </div>
  )
}

export default Footer
