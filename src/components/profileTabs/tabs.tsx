"use client";
import React, { ReactElement, useState } from "react";

import styles from "./tabs.module.css";

const Tabs = ({ children }: { children: any }) => {
  const tabs = ["MUSIC PERSONA", "TRACKS", "ARTISTS", "ALBUMS", "GENRES"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child: ReactElement, index) => {
          // Only render the content of the active tab
          if (tabs[index] === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
