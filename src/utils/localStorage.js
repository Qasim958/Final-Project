import {
    LOGIN_CREDENTIALS_KEY, SIDEBAR_KEY,
  } from "../api/index.js";
  
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getfromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  // SET User Credentials to Local Storage
  export function setLoginCredentialsToLocalStorage(value) {
    return saveToLocalStorage(LOGIN_CREDENTIALS_KEY, value);
  }
  // get User Credetials From Local Storage
  export function getLoginCredentialsFromLocalStorage() {
    return getfromLocalStorage(LOGIN_CREDENTIALS_KEY);
  }
  


    // SET Selected From Sidebar to Local Storage
    export function setSidebarToLocalStorage(value) {
      return saveToLocalStorage(SIDEBAR_KEY, value);
    }
    // get User Credetials From Local Storage
    export function getSidebarFromLocalStorage() {
      return getfromLocalStorage(SIDEBAR_KEY);
    }
  