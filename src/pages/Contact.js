import React, { useState } from "react";
import { ADD_CONTACT } from "../api";
import { getApiData } from "../utils/fetchApiData";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [NameError, setNameError] = useState(true);
  const [EmailError, setEmailError] = useState(true);
  const [MessageError, setMessageError] = useState(true);

  const emailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const namePattern =
    /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
  const [counter, setCounter] = useState(0);

  const nameCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      if (namePattern.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const emailCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      if (emailPattern.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const messageCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (input) => {
    input.preventDefault();
    if (counter === 0) {
      setCounter(1);
    }
    let name = input.target.name;
    let value = input.target.value;

    switch (name) {
      case "clientName":
        if (nameCheck(value)) {
          setNameError(false);
          setData({ ...data, name: value });
        } else {
          setNameError(true);
        }
        break;
      case "email":
        if (emailCheck(value)) {
          setEmailError(false);

          setData({ ...data, email: value });
        } else {
          setEmailError(true);
        }
        break;
      case "message":
        if (messageCheck(value)) {
          setMessageError(false);

          setData({ ...data, message: value });
        } else {
          setMessageError(true);
        }
        break;

      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!NameError && !EmailError && !MessageError) {
      const isAdded = await getApiData(ADD_CONTACT, data);

      if (isAdded.successful) {
        setData({
          name: "",
          email: "",
          message: "",
        });
      }
    }
  };
  return (
    <>
      <main className="conCont">
        <div className="conCont__contForm">
          <h2>Contact form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row conCont__contForm__name">
              <input
                type="text"
                onChange={handleChange}
                name="clientName"
                placeholder="Name"
                id="name"
              />
              <p
                className={NameError && counter === 1 ? "error" : "error__hide"}
              >
                Full Name Required
              </p>
            </div>
            <div className="row conCont__contForm__email">
              <input
                type="text"
                onChange={handleChange}
                name="email"
                placeholder="Email"
                id="email"
              />
              <p
                className={
                  EmailError && counter === 1 ? "error" : "error__hide"
                }
              >
                Email Invalid
              </p>
            </div>
            <div className="row conCont__contForm__message">
              <textarea
                name="message"
                onChange={handleChange}
                id="message"
                rows="3"
                cols="20"
                placeholder="Message"
              ></textarea>
              <p
                className={
                  MessageError && counter === 1 ? "error" : "error__hide"
                }
              >
                Invalid message
              </p>
            </div>
            <div className="conCont__contForm__submit">
              <button
                className={
                  NameError || EmailError || MessageError
                    ? "disabled"
                    : "enable"
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
