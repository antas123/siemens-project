import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import logo2 from "../images/logo2.jpg";
import bg from "../images/siemens.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (!userName || !pass) {
      setErr(true);
      return;
    }

    localStorage.setItem("userName", userName);

    navigate("/");
  };

  return (
    <div className={styles.boxm}>
      <div className={styles.imgc}>
        <img style={{ width: "100%", height: "100%" }} src={bg} alt="" />
      </div>

      <div className={styles.login_container}>
        <img
          style={{
            height: "4em",
            padding: "1em",
            borderRadius: "20px",
            marginBottom: "1em",
          }}
          src={logo2}
          alt=""
        />
        <div className={styles["form-group"]}>
          <label style={{ marginRight: "5px" }} htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className={err && !userName ? styles["red"] : styles["input-field"]}
            onChange={(e) => setUserName(e.target.value)}
          />
          {err && !userName ? (
            <div style={{ color: "red" }}>Required</div>
          ) : null}
        </div>
        <div className={styles["form-group"]}>
          <label style={{ marginRight: "5px" }} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={err && !pass ? styles["red"] : styles["input-field"]}
            onChange={(e) => setPass(e.target.value)}
          />
          {err && !pass ? <div style={{ color: "red" }}>Required</div> : null}
        </div>
        <button className={styles["login-btn"]} onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
