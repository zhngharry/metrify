import React from "react";
import styles from "./mainPageShowcase.module.css";
import Image from "next/image";

const MainPageShowcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.textGroup}>
          <div className={styles.textHead}>
            Examine & Compare your Music Persona
          </div>
          <div className={styles.textBody}>
            Calculate your individual scores and see where you rank among your
            Spotify Friends
          </div>
        </div>

        <Image src="/profilePreview.png" alt="" width={480} height={530} />
      </div>
      <div className={styles.row}>
        <Image src="/tracksPreview.png" alt="" width={487} height={611} />
        <div className={styles.textGroup}>
          <div className={styles.textHead}>
            Explore your Spotify stats - all year round
          </div>
          <div className={styles.textBody}>
            Check out your top artists, tracks and genres without having to wait
            until the end of the year
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageShowcase;
