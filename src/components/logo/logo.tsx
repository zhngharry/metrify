"use client";
import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  height: number;
  width: number;
  textSize: number;
  gap: number;
  clickable: boolean;
}

const Logo: React.FC<LogoProps> = ({
  height,
  width,
  textSize,
  gap,
  clickable,
}) => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      style={{
        gap: `${gap}px`,
        cursor: clickable ? "pointer" : "default",
      }}
    >
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
        onClick={() => {
          if (clickable) {
            router.push("/");
          }
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
          cursor: clickable ? "pointer" : "default",
        }}
        onClick={() => {
          if (clickable) {
            router.push("/");
          }
        }}
      >
        Metrify
      </div>
    </div>
  );
};

export default Logo;
