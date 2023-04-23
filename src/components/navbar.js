import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Styles.css";
import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { PopupMenu } from "react-simple-widgets";

function navbar(props) {
  const navigate = useNavigate();
  const {
    logged_in_email_val,
    setlogged_in_email_func,
    logged_in_firebase_val,
    setlogged_in_firebase_func,
    logged_in_name_val,
    setlogged_in_name_func,
    logged_in_photo_val,
    setlogged_in_photo_func,
    logged_in_auth_type_val,
    setlogged_in_auth_type_func,
    logged_in_token_val,
    setlogged_in_token_func,
    logged_in_phone_val,
    setlogged_in_phone_func,
  } = props;

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setlogged_in_firebase_func(!!user);
        console.log("user", user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  function handleLogoutClick(event) {
    // Handle logout click here
    setlogged_in_email_func("");
    setlogged_in_auth_type_func("");
    setlogged_in_name_func("");
    setlogged_in_photo_func("");
    setlogged_in_phone_func("");
    setlogged_in_token_func("");
    try {
      firebase.auth().signOut();
    } catch (e) {
      console.log("Error");
    }
    navigate("/");
  }

  return (
    <nav class="navbar fixed-top navbar-light navbar-container nav-bar-container">
      <div class="sub-nav-container nav-padding-left">
        <a class="nav-link nav-active nav-item" href="/">
          Home
        </a>
        <a class="nav-link nav-item" href="/hotelreg">
          Hotel Registration
        </a>
        <a class="nav-link nav-item" href="/dashboard">
          Dashboards
        </a>
      </div>
      {logged_in_email_val ? (
        <div class="sub-nav-container">
          <PopupMenu>
            <button className="nav-text-button nav-link nav-item">
              User Info
            </button>

            <div className="card text-start">
              <div className="card-body px-4 py-4">
                <div>
                  {logged_in_photo_val && (
                    <img
                      src={logged_in_photo_val}
                      alt="Example image"
                      className="nav-img"
                    />
                  )}
                </div>
                <h5 className="text-center mb-0">{logged_in_name_val}</h5>
                <p className="text-center mb-2">{logged_in_email_val}</p>
                <p className="text-center mb-2">Phone: {logged_in_phone_val}</p>
              </div>
            </div>
          </PopupMenu>
          <span
            class="nav-link nav-item login-btn nav-logout"
            onClick={handleLogoutClick}
          >
            Logout
          </span>
        </div>
      ) : (
        <div class="sub-nav-container">
          <a class="nav-link nav-item login-btn" href="/login">
            Login
          </a>
          <a class="nav-link nav-item sign-up-btn" href="/signup">
            Register
          </a>
        </div>
      )}
    </nav>
  );
}

export default navbar;
