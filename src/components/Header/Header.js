import React from 'react'

import styles from "./Header.module.scss"
import { MdKeyboardArrowDown } from "react-icons/md"

const Header = () => {
  return (
    <>
    <div className={styles.header}>
       <div className={styles.leftBtn}>Genius</div>
       <div className={styles.navbarBlock}></div>
       <ul className={styles.navbar}>
         <li>Preise</li>
         <li>Preferenzen</li>
         <li>Kontakt</li>
       </ul>
       <div className={styles.rightBtnBlock}><span className={styles.rightBtn}>EN <MdKeyboardArrowDown className={styles.arrow} size="1.1em" color="#8D8D8D;"/></span> </div> 
    </div>
    <div className={styles.bg}></div>
    </>
    
  )
}

export default Header