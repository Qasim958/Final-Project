import React, { useState } from "react";
import { Link } from "react-router-dom";
import call from "../images/call.jpg";
import Redirect from "../components/Redirect";
import { getLoginCredentialsFromLocalStorage, setLoginCredentialsToLocalStorage } from "../utils/localStorage";

const AdminSidebar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    getLoginCredentialsFromLocalStorage()
  );
  const updateLogoutStatus = () => {
    setIsLoggedIn(setLoginCredentialsToLocalStorage(false));
  };
  return (
    <>
      {isLoggedIn !== true ? (
        <Redirect loc="/SignIn" />
      ) : (
        <div className="AdminNavi">
          <div className="AdminNavi__body">
            <div className="AdminNavi__body__content">
              <img src={call} alt="call" />
            </div>
            <div className="AdminNavi__body__content">
              <h3>Admin</h3>
            </div>
            <div className="AdminNavi__body__content">
              <Link to="/dashboard">
                <h4>Add Establishment</h4>
              </Link>
            </div>
            <div className="AdminNavi__body__content">
              <Link to="/est-record">
                <h4>Establishment-Record</h4>
              </Link>
            </div>
            <div className="AdminNavi__body__content">
              <Link to="/record">
                <h4>Enquiry-Record</h4>
              </Link>
            </div>
            <div className="AdminNavi__body__content">
              <Link to="/admincontact">
                <h4>Contact-Record</h4>
              </Link>
            </div>
            <div className="AdminNavi__body__content">
              <button className="logButt" onClick={updateLogoutStatus}>
                <h4>Logout</h4>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AdminSidebar;
