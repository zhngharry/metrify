"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./redirect.module.css";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const params = useSearchParams();
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const code = params.get("code");

      push("/profile");
    }, 10000);
  }, []);

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
