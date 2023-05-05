import { useState, useEffect } from 'react'
import accomodations from '../../data/data.json'
import styles from './Accomodation.module.css'
import Collapse from '../Collapse'
import Slider from '../Slider'

function Accomodation() {

  const [isLoading, setIsLoading] = useState(true)
  const [accomodation, setAccomodation] = useState({})

  useEffect(() => {
    const splitUrl = window.location.href.split('/')
    const id = splitUrl[splitUrl.length - 1]
    const rightAccomodation = accomodations.find(accomodation => accomodation.id === id)
    setAccomodation(rightAccomodation)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return(
      <h1>Chargement...</h1>
    )
  } else {
    return(
      <div className={styles.container}>
        <Slider images={accomodation.pictures} />
        <div className={styles['split-container']}>
          <div>
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
            <div className={styles['tags-container']}>
              {accomodation.tags.map((tag) => (
                <p className={styles.tag}>{tag}</p>
              ))}
            </div>
          </div>
          <div>
            <div className={styles['host-container']}>
              <p>{accomodation.host.name}</p>
              <img className={styles.avatar} src={accomodation.host.picture} alt="host avatar" />
            </div>
          </div>
        </div>
        <div className={styles['split-container']}>
          <div className={styles.col}>
            <Collapse title='Description' text={accomodation.description} margin={false}/>
          </div>
          <div className={styles.col}>
            <Collapse title='Description' text={accomodation.description} margin={false}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Accomodation
