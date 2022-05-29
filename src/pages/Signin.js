import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, LOGIN_URL } from "../api";
import FooterComponent from "../components/footer";
import Header from "../components/header";
import Dashboard from "../pages/Add-estab";
import { getApiData } from "../utils/fetchApiData";
import {
  getLoginCredentialsFromLocalStorage,
  setLoginCredentialsToLocalStorage,
} from "../utils/localStorage";

export default function SignIn(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNameError, setUserNameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleChange = (input) => {
    if (counter === 0) {
      setCounter(1);
    }
    let name = input.target.name;
    let value = input.target.value;
    switch (name) {
      case "userName":
        value === "admin" ? setUserNameError(false) : setUserNameError(true);
        break;
      case "password":
        value === "admin123" ? setPasswordError(false) : setPasswordError(true);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    if (passwordError === false && userNameError === false) {
      setLoginCredentialsToLocalStorage(true);
      setIsLoggedIn(getLoginCredentialsFromLocalStorage());
    } else {
      alert("Username or password is incorrect");
    }
  };

  // const handleSubmit = async () => {

  //   const response = await getApiData(LOGIN_URL, {
  //     username: "admin",
  //     password: "admin123",
  //   });
  //   console.log(response);
  //   // setLoginCredentialsToLocalStorage(true)
  // };

  return (
    <>
      <main className="signCont">
        <section className="row signCont__header">
          <div className=" col-md-12 signCont__header__left">
            <div className="banner">
              <div className="banner__heading">
                <Link to="/accomodations">
                  <h3>Hotels</h3>
                </Link>
              </div>
            </div>
            <div className="banner bb">
              <hr className="bar" />
            </div>
            <div className="banner">
              <div className="banner__heading">
                <Link to="/accomodations">
                  <h3>Guesthouses</h3>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {!isLoggedIn ? (
          <section className="signCont__signForm">
            <div className="signCont__signForm__heading">
              <h2>Sign In</h2>
            </div>
            <div className="signCont__signForm__body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="row  signCont__signForm__name">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="userName"
                    className="userName form-control"
                    id="userName"
                    placeholder="Username"
                  />
                  <p
                    className={
                      userNameError === true && counter === 1
                        ? "error"
                        : "error__hide"
                    }
                  >
                    username is incorrect
                  </p>
                </div>
                <div className="row  signCont__signForm__pass">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="password"
                    className="password form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <p
                    className={
                      passwordError === true && counter === 1
                        ? "error"
                        : "error__hide"
                    }
                  >
                    password is incorrect
                  </p>
                </div>
                <div className="signCont__signForm__body__submit">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </section>
        ) : (
          <Dashboard loginStatus={isLoggedIn} />
        )}
      </main>
    </>
  );
}
