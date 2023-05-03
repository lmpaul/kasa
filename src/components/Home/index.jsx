import Banner from "../Banner"
import Card from "../Card"
import data from "../../data/data.json"
import styles from './Home.module.css'
import image from '../../assets/images/home-banner.png'

function Home() {

  return(
    <>
      <Banner image={image} alt='paysage'>
        <p>Chez vous, partout et ailleurs</p>
      </Banner>
      <div className={styles['cards-container']}>
        {data.map(accomodation => (
            <Card id={accomodation.id} title={accomodation.title} cover={accomodation.cover}/>
        ))}
      </div>
    </>
  )
}

export default Home
