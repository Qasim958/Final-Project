import React, { useState } from "react";
import call from "../images/call.jpg";
import Redirect from "../components/Redirect";
import {
  getLoginCredentialsFromLocalStorage,
  getSidebarFromLocalStorage,
  setLoginCredentialsToLocalStorage,
  setSidebarToLocalStorage,
} from "../utils/localStorage";

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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSidebarToLocalStorage("estAdd");
                  props.state(getSidebarFromLocalStorage());
                }}
              >
                <h4>Add Establishment</h4>
              </button>
            </div>
            <div className="AdminNavi__body__content">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSidebarToLocalStorage("estRec");
                  props.state(getSidebarFromLocalStorage());
                }}
              >
                <h4>Establishments</h4>
              </button>
            </div>
            <div className="AdminNavi__body__content">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSidebarToLocalStorage("enqRec");
                  props.state(getSidebarFromLocalStorage());
                }}
              >
                <h4>Enquiries</h4>
              </button>
            </div>
            <div className="AdminNavi__body__content">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSidebarToLocalStorage("conRec");
                  props.state(getSidebarFromLocalStorage());
                }}
              >
                <h4>Contacts</h4>
              </button>
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
