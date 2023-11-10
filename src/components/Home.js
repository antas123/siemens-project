// Home.js
import React from 'react';
import p1 from "../images/pic.jpg";
import p2 from "../images/pic2.jpeg";
import p3 from "../images/pic3.jpg";
import styles from './Login.module.css'; // Import the CSS module
import bgvd from "../videos/vdo.mp4"

const Home = () => {
  return (
    <div className={styles.container}>
    <video autoPlay loop muted style={{height:"100vh", width:"100%"}} >
      <source src={bgvd} type='video/mp4'/>
    </video>
      {/* <img src={p1} alt="" className={styles.image} />
      <img src={p2} alt="" className={styles.image} />
      <img src={p3} alt="" className={styles.image} /> */}
    </div>
  );
};

export default Home;
