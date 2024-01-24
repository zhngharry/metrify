import React from "react";

import { userStore } from "@/src/store/user";
import styles from "./musicPersona.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/utils/authOptions";

export default function MusicPersona() {
  return (
    <div className={styles.container}>
      <div className={styles.personaContainer}>
        <div className={styles.personaTitle}>
          YOUR CURRENT LISTENING PERSONA
        </div>
        <div className={styles.currentPersonaWrapper}>
          <div className={styles.currentPersonaGraphics}>Insert Graphs</div>
          <div className={styles.personaDescription}>blablablbal text</div>
        </div>
      </div>
      <div className={styles.personaContainer}>
        <div className={styles.personaTitle}>COMPARED TO 6 MONTHS AGO</div>
        <div className={styles.oldPersonaWrapper}>
          <div className={styles.oldPersonaStats}>insert stats</div>
          <div className={styles.personaDescription}>insert balblablalbbal</div>
        </div>
      </div>
    </div>
  );
}
