import React from 'react'
import logo2 from "../images/logo2.jpg";
import {Link} from "react-router-dom";
import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Sidebar = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            style={{ height: "5em", margin: "0.7rem 0.7px 0px 0.7rem" }}
            src={logo2}
            alt=""
          />
          <h2 style={{ color: "#D0D4CA", marginLeft: "0.7em" }}>
            SIEMENS DASHBOARD
          </h2>
        </div>
        <div className={styles.links}>
            <Link style={{color:"white",textDecoration:"none", fontFamily:"serif"}}  to="about">About us</Link>
            <Link style={{color:"white",textDecoration:"none", fontFamily:"serif",marginTop:"1em"}} to="contact">Contact us</Link> 
            <Link style={{color:"white",textDecoration:"none", fontFamily:"serif",marginTop:"1em"}} to="career">Careers</Link> 
        </div>
    </div>
  )
}

export default Sidebar