import React, { useState } from "react";
import { ADD_ENQUIRY } from "../api";
import { getApiData } from "../utils/fetchApiData";

const EnqFormComponent = (props) => {
  const [data, setData] = useState({
    establishment: props.name,
    clientName: "",
    email: "",
    checkin: "",
    checkout: "",
    adults: 0,
    childrens: 0,
    notes: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "clientName":
        setData({ ...data, clientName: value });

        break;

      case "email":
        setData({ ...data, email: value });
        break;

      case "checkin":
        setData({ ...data, checkin: value });

        break;

      case "checkout":
        setData({ ...data, checkout: value });

        break;

      case "adults":
        setData({ ...data, adults: value });
        break;
      case "childrens":
        setData({ ...data, childrens: value });
        break;
      case "notes":
        setData({ ...data, notes: value });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    const isAdded = await getApiData(ADD_ENQUIRY, data);
    console.log(isAdded);
    if (isAdded.successful) {
      alert("Successful");
    }
  };

  return (
    <div className="enqForm">
      <h2>Book Your Accomodation</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="enqForm__estab">
          <div className="">
            <label htmlFor="estab">Establishment</label>
          </div>
          <div className="">
            <input
              type="text"
              value={props.name}
              name="establishment"
              id="establishment"
              readOnly
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row enqForm__name">
          <div className="">
            <label htmlFor="name">Fullname</label>
          </div>
          <div className="">
            <input
              type="text"
              name="clientName"
              id="clientName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row  enqForm__email">
          <div className="">
            <label htmlFor="email">Email</label>
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row  enqForm__checkIn">
          <div className="">
            <label htmlFor="checkIn">Checkin</label>
          </div>
          <div className="">
            <input
              type="date"
              name="checkin"
              id="checkin"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row enqForm__checkOut">
          <div className="">
            <label htmlFor="checkOut">Checkout</label>
          </div>
          <div className="">
            <input
              type="date"
              name="checkout"
              id="checkout"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="row  enqForm__people">
          <div className="enqForm__people__adult">
            <div className="">
              <label htmlFor="adult">Adult</label>
            </div>
            <div className="    ">
              <select
                name="adults"
                id="adults"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-xs-6 enqForm__people__children">
            <div className="col-md-8 col-xs-8">
              <label htmlFor="children">Children</label>
            </div>
            <div className="col-md-4 col-xs-4">
              <select
                name="childrens"
                id="children"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row  enqForm__note">
          <div className="">
            <label htmlFor="note">Note</label>
          </div>
          <div className="">
            <textarea
              name="notes"
              id="notes"
              rows="4"
              cols="27"
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
          </div>
        </div>
        <div className="row enqForm__submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnqFormComponent;
