import React from "react";

import styles from "./Footer.module.scss";

import { GoLocation } from "react-icons/go";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className={styles.footerBlock}>
      <ul className={styles.absoluteNav}>
         <li>Preise</li>
         <li>Preferenzen</li>
         <li>Kontakt</li>
       </ul>
      <div className={styles.twoBlocks}>
        <div className={styles.leftBlock}>
          <ul className={styles.contacts}>
            <IconContext.Provider value={{ size: "1.8em" }}>
              <li>
                <GoLocation className={styles.icon} />
                {"Poststr, 45, 44890 Hamburg"}
              </li>
              <li>
                <BsEnvelope className={styles.icon} />
                {"HELLO@TRATATA.DE"}
              </li>
              <li>
                <BsTelephone className={styles.icon} />
                {"040 380-33- 44"}
              </li>
            </IconContext.Provider>
          </ul>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.flexContainer}>
            <h2 className={styles.titleForm}>Schreiben Sie uns!</h2>
            <form className={styles.form}>
              <input
                className={styles.firstInp}
                type="text"
                placeholder="Firma/organisation"
              />
              <div className={styles.twoInpRow}>
                <input
                  className={styles.secondInp}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                />
                <input
                  className={styles.thirdInp}
                  type="tel"
                  placeholder="Telefon"
                />               
              </div>
              <textarea
                className={styles.message}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Was ist ihr anliegen?"
              ></textarea>
            </form>
            <button className={styles.formBtn}>Senden</button>
          </div>
        </div>
      </div>
      <div className={styles.footerLast}>
        © 2019 Genius Web Agentur. Alle Rechte vorbehalten
      </div>
    </footer>
  );
};

export default Footer;
