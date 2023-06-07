import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom'

function Card({id, title, cover}) {

  const navigate = useNavigate()

  return(
    <div className={styles.card} onClick={() => {navigate(`/accomodation/${id}`)}}>
      <div className={styles.radiant}></div>
      <img src={cover} alt="bien"/>
      <p>
        {title}
      </p>
    </div>
  )
}

export default Card
