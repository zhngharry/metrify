import React from "react";
import styles from "./footerLogo.module.css";
import Logo from "../../logo/logo";

const FooterLogo = () => {
  return (
    <div className={styles.container}>
      <Logo width={80} height={72} textSize={40} gap={20} clickable={true} />
      <div className={styles.text}>
        © 2024 - Metrify <p />
        We are not related to Spotify AB or any of it´s partners in any way
      </div>
    </div>
  );
};

export default FooterLogo;
