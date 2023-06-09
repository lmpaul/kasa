import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import accomodations from '../../data/data.json'
import styles from './Accomodation.module.css'
import Collapse from '../Collapse'
import Slider from '../Slider'
import {ReactComponent as Star} from '../../assets/images/star.svg';

function Accomodation() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [accomodation, setAccomodation] = useState({})

  useEffect(() => {
    const splitUrl = window.location.href.split('/')
    const id = splitUrl[splitUrl.length - 1]
    const rightAccomodation = accomodations.find(accomodation => accomodation.id === id)
    if (rightAccomodation) {
      setAccomodation(rightAccomodation)
      setIsLoading(false)
    } else {
      navigate('/error')
    }
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
              {accomodation.tags.map((tag, index) => (
                <p key={index} className={styles.tag}>{tag}</p>
              ))}
            </div>
          </div>
          <div>
            <div className={styles['host-container']}>
              <p>{accomodation.host.name}</p>
              <img className={styles.avatar} src={accomodation.host.picture} alt="host avatar" />
            </div>
            <div>
              {Array.from(Array(5).keys()).map(num => (
                  <Star key={num} fill={ num + 1 <= parseInt(accomodation.rating) ? '#FF6060' : '#E3E3E3'}/>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['split-container']}>
          <div className={styles.col}>
            <Collapse title='Description' type='text' text={accomodation.description} margin={false}/>
          </div>
          <div className={styles.col}>
            <Collapse title='Équipements' type='array' array={accomodation.equipments} margin={false}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Accomodation
