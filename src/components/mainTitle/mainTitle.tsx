import React from "react";
import styles from "./mainTitle.module.css";
import Logo from "../logo/logo";
import LoginButton from "../login/loginButton/loginButton";

const MainTitle = () => {
  return (
    <div className={styles.header}>
      <div className={styles.slogan}>
        <Logo width={166} height={148} textSize={80} gap={26} />
        <div className={styles.text}>TRACK YOUR VIBE</div>
      </div>

      <div className={styles.login}>
        <div className={styles.loginText}>
          Login with Spotify to see your personalized music metrics and other
          stats!
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export default MainTitle;
