import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";

interface LogoProps {
  height: number;
  width: number;
  textSize: number;
  gap: number;
}

const Logo: React.FC<LogoProps> = ({ height, width, textSize, gap }) => {
  return (
    <div
      className={styles.container}
      style={{
        gap: `${gap}px`,
      }}
    >
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
      >
        <Image
          src="/logoBars.png"
          alt=""
          height={height}
          width={width}
          className={styles.image}
        ></Image>
      </div>
      <div
        className={styles.text}
        style={{
          fontSize: `${textSize}px`,
        }}
      >
        Metrify
      </div>
    </div>
  );
};

export default Logo;
