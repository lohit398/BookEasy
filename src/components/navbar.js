import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Styles.css";
import { useEffect, useState } from "react";
function navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (sessionStorage.loggedInToken == "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  });
  return (
    <nav class="navbar fixed-top navbar-light navbar-container nav-bar-container">
      <div class="sub-nav-container nav-padding-left">
        <a class="nav-link nav-active nav-item" href="#">
          Home
        </a>
        <a class="nav-link nav-item" href="/hotelreg">
          Hotel Registration
        </a>
        <a class="nav-link nav-item" href="/dashboard">
          Dashboards
        </a>
      </div>
      {!isLoggedIn && (
        <div class="sub-nav-container">
          <a class="nav-link nav-item login-btn" href="/login">
            Login
          </a>
          <a class="nav-link nav-item sign-up-btn" href="/signup">
            Register
          </a>
        </div>
      )}
      {isLoggedIn && (
        <div class="sub-nav-container">
          <a class="nav-link nav-item login-btn" href="/login">
            Logout
          </a>
        </div>
      )}
    </nav>
  );
}

export default navbar;
