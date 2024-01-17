"use client";
import styles from "./loadingpage.module.css";
import { useSession } from "next-auth/react";

export default function LoadingScreen() {
  const { status, data } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
      </div>
      <div className={styles.text}>Loading your personal metrics...</div>
    </div>
  );
}
