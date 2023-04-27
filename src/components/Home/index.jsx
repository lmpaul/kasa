import Banner from "../Banner"
import Card from "../Card"
import data from "../../data/data.json"
import styles from './Home.module.css'

function Home() {

  // const accomodations = JSON.parse(data)

  return(
    <>
      <Banner></Banner>
      <div className={styles['cards-container']}>
        {data.map(accomodation => (
            <Card id={accomodation.id} title={accomodation.title} cover={accomodation.cover}/>
        ))}
      </div>
    </>
  )
}

export default Home
