"use client";

import React from "react";
import { handleLogin } from "../../../../utils/spotifyAuth";
import styles from "./loginButton.module.css";

const LoginButton = () => {
  return (
    <div className={styles.loginButton} onClick={handleLogin}>
      Get Started
    </div>
  );
};

export default LoginButton;
