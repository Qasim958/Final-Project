import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headingtree from "../icons/tree.png";
import face from "../icons/facebook-new.png";
import twitt from "../icons/twitter.png";
import insta from "../icons/instagram.png";
import { getLoginCredentialsFromLocalStorage } from "../utils/localStorage";

const NavComponent = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(getLoginCredentialsFromLocalStorage());
  },[getLoginCredentialsFromLocalStorage]);
  return (
    <>
      <div className="nav">
        <div className="row nav__top">
          <div className="nav__top__left">
            <div className="nav__top__left__heading">
              <h6>seedtotree@gmail.com</h6>
            </div>
            <div className=" nav__top__left__heading">
              <h6>0047-92698012 </h6>
            </div>

            <div className=" nav__top__left__heading">
              {isLoggedIn ? (
                <Link className="dashboard" to="/dashboard">
                  <h6>Dashboard </h6>
                </Link>
              ) : (
                <Link className="signLink" to="/signin">
                  <h6>Sign in </h6>
                </Link>
              )}
            </div>
          </div>

          <div className="nav__top__right">
            <div className="nav__top__right__socialIcons">
              <Link to="faceb">
                <img src={face} alt="faceIcon"></img>
              </Link>
            </div>
            <div className="nav__top__right__socialIcons">
              <Link to="twitte">
                <img src={twitt} alt="twittIcon"></img>
              </Link>
            </div>
            <div className="nav__top__right__socialIcons">
              <Link to="instag">
                <img src={insta} alt="instaIcon"></img>
              </Link>
            </div>
          </div>
        </div>

        <div className="row nav__heading">
          <div className="nav__heading__icon">
            <img src={headingtree} alt="seedtotree Icon"></img>
          </div>
          <div className="nav__heading__title">
            <h1>Seed To Tree</h1>
          </div>
        </div>

        <div className="row nav__primary">
          <div>
            <Link className="pageLink" to="/">
              <h4>Home</h4>
            </Link>
            <Link className="accoLink" to="/accomodations">
              <h4>Accomodations</h4>
            </Link>
            <Link className="conLink" to="/contact">
              <h4>Contact</h4>
            </Link>
          </div>
        </div>

        {/* {props.show ? <Searchbar /> : null} */}
      </div>
    </>
  );
};
export default NavComponent;
