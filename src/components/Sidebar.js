import React, { useState } from 'react';
import logo2 from "../images/logo2.jpg";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem('userName');
    navigate("login");
  }

  // Function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

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
        <Link
          style={{
            color: isLinkActive("/") ? "grey" : "white",
            textDecoration: "none",
            fontFamily: "serif",
          }}
          to="/"
        >
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon="fa-solid fa-house" />Home
        </Link>
        <Link
          style={{
            color: isLinkActive("/about") ? "grey" : "white",
            textDecoration: "none",
            fontFamily: "serif",
            marginTop: "1em",
          }}
          to="/about"
        >
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon="fa-solid fa-address-card" />About us
        </Link>
        <Link
          style={{
            color: isLinkActive("/contact") ? "grey" : "white",
            textDecoration: "none",
            fontFamily: "serif",
            marginTop: "1em",
          }}
          to="/contact"
        >
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon="fa-solid fa-address-book" />Contact us
        </Link>
        <Link
          style={{
            color: isLinkActive("/career") ? "grey" : "white",
            textDecoration: "none",
            fontFamily: "serif",
            marginTop: "1em",
          }}
          to="/career"
        >
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon="fa-solid fa-check" />Careers
        </Link>
      </div>
      <div onClick={handleLogout} style={{ padding: "1em", display: "flex", flexDirection: "row", position: "absolute", bottom: "0" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0.5em" }}><FontAwesomeIcon style={{ color: "red", fontSize: "x-large", cursor: "pointer" }} icon="fa-solid fa-right-from-bracket" /></div>
        <div> <h5 style={{ color: "white", cursor: "pointer" }} >LOGOUT</h5> </div>
      </div>
    </div>
  );
};

export default Sidebar;
