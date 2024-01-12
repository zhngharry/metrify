import React from "react";
import styles from "./footer.module.css";
import FooterLogo from "./footerLogo/footerLogo";

const Footer = () => {
  return (
    <div className={styles.container}>
      <FooterLogo />
      <div className={styles.login}>rest</div>
    </div>
  );
};

export default Footer;
