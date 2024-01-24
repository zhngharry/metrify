import React from "react";
import styles from "./profilepage.module.css";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/utils/authOptions";
import { userStore } from "@/src/store/user";
import Tabs from "@/src/components/profileTabs/tabs";
import MusicPersona from "@/src/components/tabViews/musicPersona/musicPersona";
import Tracks from "@/src/components/tabViews/tracks/tracks";
import Artists from "@/src/components/tabViews/artists/artists";
import Albums from "@/src/components/tabViews/albums/albums";
import Genres from "@/src/components/tabViews/genres/genres";
import {
  getProfileData,
  getSavedTracks,
  getSavedPlaylists,
  getTopArtistsShort,
  getTopArtistsMedium,
  getTopArtistsLong,
} from "@/src/utils/dataFetching";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    return <div className={styles.container}>Not logged in</div>;
  }

  const auth_header = {
    Authorization: `Bearer ${session?.accessToken}`,
  };

  await Promise.all([
    getProfileData(auth_header),
    getSavedTracks(auth_header),
    getSavedPlaylists(auth_header),
    getTopArtistsShort(auth_header),
    getTopArtistsMedium(auth_header),
    getTopArtistsLong(auth_header),
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileBanner}>
          <Image
            src={userStore.getState().imageBig}
            alt=""
            height={240}
            width={240}
            className={styles.profileBannerImage}
          ></Image>
          <div className={styles.profileBannerText}>
            <div className={styles.profileBannerHeader}>USER PROFILE</div>
            <div className={styles.profileBannerTitle}>
              {session?.user?.name}
            </div>
            <div className={styles.profileBannerStatsContainer}>
              <div className={styles.statsText}>
                <div className={styles.statNumber}>
                  {userStore.getState().followers}
                </div>
                <div className={styles.statName}>Followers</div>
              </div>
              <div className={styles.statsText}>
                <div className={styles.statNumber}>
                  {userStore.getState().savedTracks}
                </div>
                <div className={styles.statName}>Saved Tracks</div>
              </div>
              <div className={styles.statsText}>
                <div className={styles.statNumber}>
                  {userStore.getState().playlists}
                </div>
                <div className={styles.statName}>Saved Playlists</div>
              </div>
            </div>
          </div>
        </div>
        <Tabs>
          <MusicPersona />
          <Tracks />
          <Artists />
          <Albums />
          <Genres />
        </Tabs>
      </div>
    </div>
  );
}
