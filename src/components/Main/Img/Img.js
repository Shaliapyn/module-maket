import React from 'react'

import styles from "./Img.module.scss"

const Img = ({img}) => {
  return (
    <div>
        <img src={img} alt="" />
              <figcaption className={styles.imgFig}>
                Webdesign Agentur
              </figcaption>
    </div>
  )
}

export default Img