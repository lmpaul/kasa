import { useState } from "react"
import styles from './Slider.module.css'
import RightArrow from '../../assets/images/right-arrow.png'
import LeftArrow from '../../assets/images/left-arrow.png'

function Slider({images}) {

  const [imageIndex, setImageIndex] = useState(0)

  const handleRightArrowClick = () => {
    if (imageIndex < images.length - 1 ) {
      setImageIndex(imageIndex + 1)
    } else if (imageIndex === images.length - 1) {
      setImageIndex(0)
    }
  }

  const handleLeftArrowClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    } else if (imageIndex === 0) {
      setImageIndex(images.length - 1)
    }
  }

  return (
    <div className={styles.slider}>
      <div onClick={handleLeftArrowClick} className={`${styles['slider__arrow-container']} ${styles['slider__left-arrow']}`}>
        <img src={LeftArrow} alt="flèche vers la gauche"/>
      </div>
      {images.map((image, index) => (
        <img id={`slide-${index}`} src={images[imageIndex]} alt="accomodation"
        className={index === imageIndex ? styles['slider__active-picture'] : styles['slider__picture']}
        />
      ))}
      <div onClick={handleRightArrowClick} className={`${styles['slider__arrow-container']} ${styles['slider__right-arrow']}`}>
        <img src={RightArrow} alt="flèche vers la droite" />
      </div>
      <div className={styles['slider__counter']}>
        <p>{imageIndex + 1}/{images.length}</p>
      </div>
    </div>
  )

}

export default Slider
