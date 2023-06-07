import Layout from '../Layout'
import styles from './Errore.module.css'
import image from '../../assets/images/404.png'
import { useNavigate } from 'react-router-dom'

function Error() {

  const navigate = useNavigate()

  return (
      <Layout>
        <div className={styles.container}>
          <div className={styles['img-container']}>
            <img src={image} alt="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
          </div>
          <p onClick={() => {navigate('/')}} className={styles.link}>Retourner sur la page d'accueil</p>
        </div>
      </Layout>
  )
}

export default Error
