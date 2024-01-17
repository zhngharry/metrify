"use client";

import React from "react";
import styles from "./loginText.module.css";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  return (
    <>
      {status !== "authenticated" ? (
        <span className={styles.link} onClick={() => signIn("spotify")}>
          Login with Spotify
        </span>
      ) : (
        <div className={styles.container}>
          <Link
            href="/profile"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            Profile
          </Link>
          <span
            className={styles.link}
            onClick={() => {
              signOut({ callbackUrl: "http://localhost:3000/" });
            }}
          >
            Logout
          </span>
        </div>
      )}
    </>
  );
};

export default Login;
