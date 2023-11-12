import React from 'react';
import styles from "./Dashboard.module.css"
import Cards from './Cards';
import Charts from './Charts';


const Dash = () => {
   
  return (
    <main className={styles.main_container}>
        <div className={styles.main_title}>
            <h3>DASHBOARD</h3>
        </div>
        <Cards/>
        <Charts/>
    </main>
  );
};

export default Dash;
