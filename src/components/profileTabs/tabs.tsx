"use client";
import React, { ReactElement, useState } from "react";

import styles from "./tabs.module.css";

const Tabs = ({ children }: { children: any }) => {
  const tabs = ["MUSIC PERSONA", "TRACKS", "ARTISTS", "ALBUMS", "GENRES"];
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainerLine}>
        <div className={`${styles.line} ${styles[`linestate-${activeTab}`]}`} />
        <div className={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={styles.tab}
              onClick={() => handleTabClick(index)}
            >
              <div className={styles.tabText}>{tab}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child: ReactElement, index) => {
          if (index === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
