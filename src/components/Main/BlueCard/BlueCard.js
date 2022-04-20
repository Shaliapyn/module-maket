import React from 'react'

import styles from "./BlueCard.module.scss"

const BlueCard = ({even}) => {
  return (
    <div className={!even ? styles.blueCard : `${styles.blueCard} ${styles.blueCardEven}` }>
        <h2 className={styles.blueCardTitle}>Webdesign Agentur</h2>
        <p className={styles.blueCardText}>Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
    </div>
  )
}

export default BlueCard