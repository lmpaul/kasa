import styles from './Card.module.css'

function Card({id, title, cover}) {
  return(
    <a className={styles.card} href={`/accomodation/${id}`}>
      <div className={styles.radiant}></div>
      <img src={cover} alt="bien"/>
      <p>
        {title}
      </p>
    </a>
  )
}

export default Card
