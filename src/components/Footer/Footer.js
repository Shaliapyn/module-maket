import React from 'react'

import styles from "./Footer.module.scss"

import { GoLocation } from "react-icons/go"
import { BsEnvelope, BsTelephone } from "react-icons/bs"
import { IconContext } from 'react-icons'

const Footer = () => {
  return (
    <footer className={styles.footerBlock}>
        <div className={styles.twoBlocks}>
        <div className={styles.leftBlock}>
            <ul className={styles.contacts}>
            <IconContext.Provider value={{size: "1.8em"}}>
                <li><GoLocation className={styles.icon} />{"Poststr, 45, 44890 Hamburg"}</li>
                <li><BsEnvelope className={styles.icon}/>{"HELLO@TRATATA.DE"}</li>
                <li><BsTelephone className={styles.icon}/>{"040 380-33- 44"}</li>
            </IconContext.Provider>
            </ul>
        </div>
        <div className={styles.rightBlock}></div>
        <div className={styles.footerLast}>© 2019  Genius Web Agentur. Alle Rechte vorbehalten</div>
        </div>
        
    </footer>
  )
}

export default Footer