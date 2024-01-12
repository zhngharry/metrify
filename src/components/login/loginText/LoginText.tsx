"use client";

import React from "react";
import styles from "./loginText.module.css";
import Link from "next/link";
import { handleLogin } from "../../../../utils/spotifyAuth";

const Login = () => {
  let status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <span className={styles.link} onClick={handleLogin}>
          Login with Spotify
        </span>
      ) : (
        <Link href="/">Logout</Link>
      )}
    </>
  );
};

export default Login;
