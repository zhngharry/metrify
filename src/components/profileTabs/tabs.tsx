"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import styles from "./tabs.module.css";

const ProfileTabs = () => {
  return (
    <div className={styles.container}>
      <Tabs
        key="underlined"
        color="primary"
        variant="underlined"
        size="lg"
        aria-label="Profile"
      >
        <Tab key="persona" title="Music Persona" />
        <Tab key="tracks" title="Tracks" />
        <Tab key="artists" title="Artists" />
        <Tab key="albums" title="Albums" />
        <Tab key="genres" title="Genres" />
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
