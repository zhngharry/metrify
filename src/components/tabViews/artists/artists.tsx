import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/utils/authOptions";
import styles from "./artists.module.css";
import { userStore } from "@/src/store/user";

type Artist = {
  name: string;
  image: string;
  link: string;
  placement: number;
  genres: string[];
  uniqueness: number;
};

const Artists = () => {
  const artists_long_term = userStore.getState().artists_long_term;

  return (
    <div className={styles.container}>
      {artists_long_term.map((artist: Artist, index: number) => (
        <div className={styles.artist} key={artist.name}>
          <div className={styles.artistPlacement}>{index + 1}</div>

          <div className={styles.artistInfo}>
            <div className={styles.artistName}>{artist.name}</div>
            <div className={styles.artistGenres}>
              {artist.genres.slice(0, 3).join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artists;
