import React from "react";
import styles from "./header.module.css";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={56} height={50} textSize={24} gap={12} />
      </div>
      <div className={styles.login}>Login</div>
    </div>
  );
};

export default Header;
