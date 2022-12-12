import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Bottombar from "../components/Bottombar";
import Explorer from "../components/Explorer";
import Sidebar from "../components/Sidebar";
import Tabsbar from "../components/Tabsbar";
import Titlebar from "../components/Titlebar";
import styles from '../styles/Layout.module.css';
const HomeLayout = () => {
    return (
        <Fragment>
            <Titlebar />
            <div className={styles.main}>
                <Sidebar />
                <Explorer />
                <div style={{ width: "100%" }}>
                    <Tabsbar />
                    <main className={styles.content}><Outlet /></main>
                </div>
            </div>
            <Bottombar />

            {/* <Footer /> */}
        </Fragment>
    );
};


export default HomeLayout;
