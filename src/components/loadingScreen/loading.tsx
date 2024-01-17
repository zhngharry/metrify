import styles from "./loading.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
        <span className={styles.stroke}></span>
      </div>
      <div className={styles.text}>Loading your profile...</div>
    </div>
  );
}
