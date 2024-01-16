"use client";

import React from "react";
import styles from "./mainTitle.module.css";
import Logo from "../logo/logo";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MainTitle = () => {
  const { status, data } = useSession();
  const { push } = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.slogan}>
        <Logo width={166} height={148} textSize={80} gap={26} />
        <div className={styles.text}>TRACK YOUR VIBE</div>
      </div>

      {status === "authenticated" ? (
        // Display a different button if user is authenticated
        <div className={styles.login}>
          <div className={styles.loginText}>
            Currently signed in as {data.user?.name}
          </div>
          <div className={styles.loginButton} onClick={() => push("/profile")}>
            View Profile
          </div>
        </div>
      ) : (
        <div className={styles.login}>
          <div className={styles.loginText}>
            Login with Spotify to see your personalized music metrics and other
            stats!
          </div>
          <div className={styles.loginButton} onClick={() => signIn("spotify")}>
            Get Started
          </div>
        </div>
      )}
    </div>
  );
};

export default MainTitle;
