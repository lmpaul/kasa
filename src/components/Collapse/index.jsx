import styles from './Collapse.module.css'
import { useState } from 'react'
import Arrow from '../../assets/images/arrow.png'

function Collapse({title, text, margin}) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={margin ? styles.collapse : ''}>
      <div className={styles['collapse__title']} onClick={handleClick}>
        {title}
        <img src={Arrow} alt="bouton flèche" className={isOpen ? styles.rotated : ''}/>
      </div>
        <div className={isOpen ? styles['collapse__body--open'] : styles['collapse__body--close']}>
          <div className={styles['collapse__content']}>
            {text}
          </div>
        </div>
    </div>

  )
}

export default Collapse
