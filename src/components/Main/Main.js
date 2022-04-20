import React from "react";

import styles from "./Main.module.scss";

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import cloud from "./imgs/cloud.png"

const Main = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.container}>
      <div className={styles.cloudBlock}>
        <img src={cloud} alt="" />
      </div>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Referenzen</h1>
          <p className={styles.text}>
            Von unseren Designern gestaltet, von unseren Entwicklern
            programmiert, von unserem Team realisiert — in enger Abstimmung mit
            dem Kunden. Zum Festpreis.
          </p>
        </div>
        <div className={styles.ladderContainer}>
          <ul className={styles.ladder}>
            <li className={styles.ladderLi}>
              <img src={img1} alt="" />
              <figcaption className={styles.imgFig}>
                Webdesign Agentur
              </figcaption>
            </li>
            <li className={styles.ladderLi}>
              <img src={img2} alt="" />
              <figcaption className={styles.imgFig}>
                Webdesign Agentur
              </figcaption>
            </li>
            <li className={styles.ladderLi}>
              <img src={img3} alt="" />
              <figcaption className={styles.imgFig}>
                Webdesign Agentur
              </figcaption>
            </li>
            <li className={styles.ladderLi}>
              <img src={img4} alt="" />
              <figcaption className={styles.imgFig}>
                Webdesign Agentur
              </figcaption>
            </li>
          </ul>
          <ul className={styles.blueCards}>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
