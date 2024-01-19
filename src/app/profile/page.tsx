import React from "react";
import styles from "./profilepage.module.css";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { userStore } from "@/src/store/user";
import Tabs from "@/src/components/profileTabs/tabs";
import MusicPersona from "@/src/components/tabViews/musicPersona/musicPersona";
import Tracks from "@/src/components/tabViews/tracks/tracks";
import Artists from "@/src/components/tabViews/artists/artists";
import Albums from "@/src/components/tabViews/albums/albums";
import Genres from "@/src/components/tabViews/genres/genres";

const PROFILE_URL = "https://api.spotify.com/v1/me";
const SAVED_TRACKS_URL = "https://api.spotify.com/v1/me/tracks";
const SAVED_PLAYLISTS_URL = "https://api.spotify.com/v1/me/playlists";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = userStore;

  if (!session?.accessToken) {
    return <div className={styles.container}>Not logged in</div>;
  }

  const auth_header = {
    Authorization: `Bearer ${session?.accessToken}`,
  };

  const profileData = await fetch(PROFILE_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState({
        userId: data.id,
        name: data.display_name,
        imageSmall: data.images[0].url,
        imageBig: data.images[1].url,
        profileLink: data.external_urls.spotify,
        followers: data.followers.total,
        ...user,
      });
    });

  const savedTracks = await fetch(SAVED_TRACKS_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState({
        savedTracks: data.total,
        ...user,
      });
    });

  const savedPlaylists = await fetch(SAVED_PLAYLISTS_URL, {
    headers: auth_header,
  })
    .then((res) => res.json())
    .then((data) => {
      userStore.setState({
        playlists: data.total,
        ...user,
      });
    });

  return (
    <div className={styles.container}>
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
          <div className={styles.profileBannerTitle}>{session?.user?.name}</div>
          <div className={styles.profileBannerStats}>
            Followers: {userStore.getState().followers}
            Saved Tracks: {userStore.getState().savedTracks}
            Saved Playlists: {userStore.getState().playlists}
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
  );
}
