import React from 'react';
import bgvd from "../videos/vdo.mp4"

const Home = () => {

  return (
    <div >
    <video src={bgvd} autoPlay loop muted style={{height:"100vh", width:"100%", objectFit:"cover"}}/>
      <div className="text" style={{position:"absolute", color:"white", top:"250px",right:"350px", textAlign:"center" }} >
        <h1>WELCOME TO THE DASHBOARD OF <br></br>  <span style={{color:"lightskyblue", fontSize:"100px" }} >SIEMENS</span> </h1>
        <h3>Thank you for Visiting our dashboard!</h3>
      </div>
    </div>
  );
};

export default Home;
