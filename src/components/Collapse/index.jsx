import styles from './Collapse.module.css'
import { useState } from 'react'
import Arrow from '../../assets/images/arrow.png'

function Collapse({title, type, text, array, margin}) {

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
            {type === 'array' ?
            array.map((item, index) => ( <p key={index}>{item}</p>))
            :
            <p>{text}</p>
            }
          </div>
        </div>
    </div>

  )
}

export default Collapse
