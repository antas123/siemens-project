import React from "react";
import styles from "./Dashboard.module.css";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className={styles.mainblock}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
       <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
