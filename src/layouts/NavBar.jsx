import React from "react";
import Bottombar from "../components/Bottombar";
import Explorer from "../components/Explorer";
import Sidebar from "../components/Sidebar";
import Tabsbar from "../components/Tabsbar";
import Titlebar from "../components/Titlebar";
import styles from '../styles/Layout.module.css';

export default function NavBar({ children }) {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
