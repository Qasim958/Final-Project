import React from "react";
import { Link } from "react-router-dom";
import face from "../icons/facebook-new.png";
import twitt from "../icons/twitter.png";
import insta from "../icons/instagram.png";
import headingtree from "../icons/tree.png";
import map from "../images/map.jpg";

const FooterComponent = (props) => {
  return (
    <div className="row footCont">
      <div className="row footCont__content">
        <div className="col-md-3 footCont__content__box1">
          <div className="row footCont__content__box1__header">
            <div className="col-md-3 col-xs-4 footCont__content__box1__header__img">
              <img src={headingtree} alt="tree"></img>
            </div>
            <div className="col-md-9 col-xs-8 footCont__content__box1__header__heading">
              <h2>Seed To Tree</h2>
            </div>
          </div>
          <div className="row col-md-10 col-md-offset-1 col-xs-8 col-xs-offset-2 footCont__content__box1__body">
            <p>
              We are one of the leading Travel Bureau in the city and our aim is
              to have satisfied costumers and give them the best prices
              available in the market.
            </p>
          </div>
        </div>
        <div className="col-md-3 footCont__content__box2">
          <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 ">
            <div className="row footCont__content__box2__header__heading">
              <h3>Our Location</h3>
            </div>
          </div>
          <div className="col-md-12 col-xs-8 col-xs-offset-2 footCont__content__box2__header__img">
            <img src={map} alt="map"></img>
          </div>
        </div>

        <div className="col-md-3 footCont__content__box3">
          <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 ">
            <div className="row footCont__content__box3__header__heading">
              <h3>Contact Us</h3>
            </div>
            <div className="row footCont__content__box3__body">
              <p>Bolange veien 256</p>
              <p>0965 Bergen</p>
              <p>Norway</p>
              <p>Tlf ; +47 92698012</p>
              <p>Tlf ; +47 22668899</p>
              <p>Holidaze@gmail.no</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 footCont__content__box4">
          <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
            <div className="row footCont__content__box4__header__heading">
              <h3>Stay in Touch</h3>
            </div>
            <div className="row footCont__content__box4__body--input">
              <input type="text" placeholder="Enter Email"></input>
              <div className="row footCont__content__box4__body--p">
                <p> Enter your email for</p>
                <p>promotions and news.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row footCont__icons">
        <Link to="faceb">
          <img src={face} alt="faceIcon"></img>
        </Link>
        <Link to="twitte">
          <img src={twitt} alt="twittIcon"></img>
        </Link>
        <Link to="instag">
          <img src={insta} alt="instaIcon"></img>
        </Link>
        
      </div>
      <div className="footCont__copyrights">
        <h4>CopyRights @ Seedtotree</h4>
      </div>
    </div>
  );
};
export default FooterComponent;
