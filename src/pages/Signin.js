import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LOGIN_URL } from "../api";

import { getApiData } from "../utils/fetchApiData";
import {
  setLoginCredentialsToLocalStorage,
} from "../utils/localStorage";

export default function SignIn(props) {
  const [userNameError, setUserNameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();

  const handleChange = (input) => {
    if (counter === 0) {
      setCounter(1);
    }
    let name = input.target.name;
    let value = input.target.value;
    switch (name) {
      case "userName":
        if (value.length > 3) {
          setUserNameError(false);
          setUserName(value);
        } else {
          setUserNameError(true);
          setUserName("");
        }
        break;
      case "password":
        if (value.length > 7) {
          setPasswordError(false);
          setPassword(value);
        } else {
          setPasswordError(true);
          setPassword("");
        }
        break;
      default:
    }
  };

  const handleSubmit = async () => {
    if (passwordError === false && userNameError === false) {
      const response = await getApiData(
        LOGIN_URL,
        { username: userName, password: password }
      );
      if (await response.valid) {
        setLoginCredentialsToLocalStorage(true);
        navigate("/dashboard");
      } else {
        setLoginCredentialsToLocalStorage(false);
        alert("Invalid Username or password.");
      }
    } else {
      setLoginCredentialsToLocalStorage(false);
    }
  };

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
      </main>
    </>
  );
}
