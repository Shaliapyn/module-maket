import styles from "./Main.module.scss";
import BlueCard from "./BlueCard";
import Img from "./Img";

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import cloud from "./imgs/cloud.png";

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
              <Img img={img1} />
            </li>
            <li className={`${styles.ladderLi} ${styles.ladderLi2}`}>
              <Img img={img2} />
            </li>
            <li className={`${styles.ladderLi} ${styles.ladderLi3}`}>
              <Img img={img3} />
            </li>
            <li className={`${styles.ladderLi} ${styles.ladderLi4}`}>
              <Img img={img4} />
            </li>
          </ul>
          <ul className={styles.blueCards}>
            <li>
              <BlueCard />
            </li>
            <li>
              <BlueCard even="even" />
            </li>
            <li>
              <BlueCard />
            </li>
            <li>
              <BlueCard even="even" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
