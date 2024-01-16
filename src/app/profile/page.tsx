"use client";

import React from "react";
import { useSession } from "next-auth/react";
import LoadingScreen from "@/src/components/loadingScreen/loading";
import styles from "./profilepage.module.css";
import Image from "next/image";

const ProfilePage = () => {
  const { status, data } = useSession();

  console.log(data);

  if (status !== "authenticated") {
    // Show loading screen while the authentication status is being checked
    return <LoadingScreen />;
  }

  // If authenticated, display the profile content
  return (
    <div className={styles.container}>
      <div className={styles.profileBanner}>
        <Image
          src="https://i.scdn.co/image/ab6775700000ee85841d1285a51591524ac60d8b"
          alt=""
          height={240}
          width={240}
          className={styles.profileBannerImage}
        ></Image>
        <div className={styles.profileBannerText}>
          <div className={styles.profileBannerHeader}>USER PROFILE</div>
          <div className={styles.profileBannerTitle}>{data.user?.name}</div>
          <div className={styles.profileBannerStats}>
            <span>aaa</span>
            <span>aaa</span>
            <span>aaa</span>
          </div>
        </div>
      </div>
      Tabs
    </div>
  );
};

export default ProfilePage;
