import Layout from '../Layout'
import styles from './Errore.module.css'
import image from '../../assets/images/404.png'

function Error() {
  return (
      <Layout>
        <div className={styles.container}>
          <div className={styles['img-container']}>
            <img src={image} alt="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <a href="/">Retourner sur la page d'accueil</a>
        </div>
      </Layout>
  )
}

export default Error
