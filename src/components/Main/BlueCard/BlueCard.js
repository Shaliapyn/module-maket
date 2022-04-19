import React from 'react'

import styles from "./BlueCard.module.scss"

const BlueCard = () => {
  return (
    <div className={styles.blueCard}>
        <h2 className={styles.title}>Webdesign Agentur</h2>
        <p className={styles.text}>Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
    </div>
  )
}

export default BlueCard