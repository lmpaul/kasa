import styles from './Banner.module.css'

function Banner({image, alt, children}) {
  return (
    <div className={styles.banner}>
      <div className={styles['banner__filter']}></div>
      <img src={image} alt={alt} />
      <div className={styles['banner__children']}>
        {children}
      </div>

    </div>
  )
}

export default Banner
