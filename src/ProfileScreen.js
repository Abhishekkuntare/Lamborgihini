import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "./features/userSlice";
import "./ProfileScreen.css";
import Fade from "react-reveal/Fade";

function ProfileScreen() {
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <>
      <div className="profileScreen">
        <div className="profileCard"></div>
        <div class="card-container">
          <span class="pro">Lambo</span>
          <img
            class="round"
            src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
            alt="Lambo"
          />
          <h3>Profile</h3>
          <h6>{user.email}</h6>
          <p>
            Welcome to lamborghini.com
            <br />
            THE CLUB
          </p>
          <div class="buttons">
            <button
              class="primary"
              onClick={() => history.push("/loginscreen")}
            >
              Sign Out
            </button>
          </div>
          <div class="skills">
            <h6>Models</h6>
            <ul>
              <li>AVENTADOR</li>
              <li>HURACÁN</li>
              <li>SPORTS</li>
              <li>URUS</li>
              <li>TERZO MILLENNIO</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
