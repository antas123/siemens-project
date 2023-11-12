import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Import the CSS module

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
   

    if (!name || !password || !securityAnswer) {
      setErr(true);
      return;
    }

    alert("Register button clicked");
    navigate("/login");
  };

  return (
    <div className={styles["register-container"]}>
      <h2>Register User</h2>
      <div className={styles["form-group"]}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className={err && !name ? styles["red"] : styles["input-field"]}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {err && !name ? (
          <div style={{ color: "red" }}>Name is required</div>
        ) : null}
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className={err && !password ? styles["red"] : styles["input-field"]}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {err && !password ? (
          <div style={{ color: "red" }}>password is required</div>
        ) : null}
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="securityQuestion">Security Question:</label>
        <select
          id="securityQuestion"
          className={styles["input-field"]}
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
        >
          <option value="" disabled>
            Select a security question
          </option>
          <option value="favoriteFruit">What is your favorite fruit?</option>
          <option value="favoriteColor">What is your favorite color?</option>
          <option value="favoriteColor">Which is your favourite city?</option>
        </select>
      </div>
      {securityQuestion ? (
        <div className={styles["form-group"]}>
          <label htmlFor="securityAnswer">Security Answer:</label>
          <input
            type="text"
            id="securityAnswer"
            className={
              err && !securityAnswer ? styles["red"] : styles["input-field"]
            }
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
          {err && !securityAnswer ? (
            <div style={{ color: "red" }}>Name is required</div>
          ) : null}
        </div>
      ) : null}
      <button className={styles["register-btn"]} onClick={handleRegister}>
        Register
      </button>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
