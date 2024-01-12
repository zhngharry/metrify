import React from "react";
import styles from "./header.module.css";
import Logo from "../logo/logo";
import Link from "next/link";
import Login from "../login/loginText/LoginText";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={56} height={50} textSize={24} gap={12} />
      </div>
      <div className={styles.links}>
        <Login />
        <Link href="/">About Metrify</Link>
      </div>
    </div>
  );
};

export default Header;