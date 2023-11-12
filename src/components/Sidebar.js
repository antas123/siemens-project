import React, { useState } from "react";
import logo2 from "../images/logo2.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("userName");
    navigate("login");
  }

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{ height: "3em", margin: "0.7rem 0.7px 0px 0.7rem" }}
          src={logo2}
          alt=""
        />
        <h5 style={{ color: "#D0D4CA", marginLeft: "0.7em" }}>
          SIEMENS DASHBOARD
        </h5>
      </div>
      <div className={styles.links}>
        <div
          style={{
            backgroundColor: isLinkActive("/") ? "#61677A" : null,
            borderRadius: "25px",
            height: "2em",
            padding: "0.1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              color: isLinkActive("/") ? "white" : "grey",
              textDecoration: "none",
              fontFamily: "serif",
              width: "100%",
              paddingLeft: "10px",
              fontSize: "0.8em",
              fontFamily: "Roboto Condensed",
            }}
            to="/"
          >
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              icon="fa-solid fa-house"
            />
            Home
          </Link>
        </div>
        <div
          style={{
            backgroundColor: isLinkActive("/dashboard") ? "#61677A" : null,
            borderRadius: "25px",
            height: "2em",
            padding: "0.1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              color: isLinkActive("/dashboard") ? "white" : "grey",
              textDecoration: "none",
              fontFamily: "serif",
              width: "100%",
              paddingLeft: "10px",
              fontSize: "0.8em",
              fontFamily: "Roboto Condensed",
            }}
            to="/dashboard"
          >
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              icon="fa-solid fa-chart-simple"
            />
            Dashboard
          </Link>
        </div>
        <div
          style={{
            backgroundColor: isLinkActive("/about") ? "#61677A" : null,
            borderRadius: "25px",
            height: "2em",
            padding: "0.1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              color: isLinkActive("/about") ? "white" : "grey",
              textDecoration: "none",
              fontFamily: "serif",
              width: "100%",
              paddingLeft: "10px",
              fontSize: "0.8em",
              fontFamily: "Roboto Condensed",
            }}
            to="/about"
          >
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              icon="fa-solid fa-address-card"
            />
            About us
          </Link>
        </div>
        <div
          style={{
            backgroundColor: isLinkActive("/contact") ? "#61677A" : null,
            borderRadius: "25px",
            height: "2em",
            padding: "0.1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              color: isLinkActive("/contact") ? "white" : "grey",
              textDecoration: "none",
              fontFamily: "serif",
              paddingLeft: "10px",
              width: "100%",
              fontSize: "0.8em",
              fontFamily: "Roboto Condensed",
            }}
            to="/contact"
          >
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              icon="fa-solid fa-address-book"
            />
            Contact us
          </Link>
        </div>

        <div
          style={{
            backgroundColor: isLinkActive("/career") ? "#61677A" : null,
            borderRadius: "25px",
            height: "2em",
            padding: "0.1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              color: isLinkActive("/career") ? "white" : "grey",
              textDecoration: "none",
              fontFamily: "serif",
              paddingLeft: "10px",
              width: "100%",
              fontSize: "0.8em",
              fontFamily: "Roboto Condensed",
            }}
            to="/career"
          >
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              icon="fa-solid fa-check"
            />
            Careers
          </Link>
        </div>
      </div>
      <div
        onClick={handleLogout}
        style={{
          padding: "1em",
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: "0",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", padding: "0.5em" }}
        >
          <FontAwesomeIcon
            style={{ color: "red", fontSize: "large", cursor: "pointer" }}
            icon="fa-solid fa-right-from-bracket"
          />
        </div>
        <div>
          {" "}
          <h6 style={{ color: "white", cursor: "pointer" }}>LOGOUT</h6>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
