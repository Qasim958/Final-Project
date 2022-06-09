import React from "react";
import { Link } from "react-router-dom";
import guest from "../images/b&b-5.jpg";
import bed from "../images/b&b-3.jpg";
import wifi from "../icons/wifi.png";
import room from "../icons/roomservice.png";
import spa from "../icons/spa.png";
import drink from "../icons/drink.png";
import swim from "../icons/swimming.png";
import car from "../icons/carpark.png";
import rest from "../icons/restaurant.png";
import tv from "../icons/tv.png";
import star from "../icons/star.png";

export default function Home(props) {
  return (
    <>
      <main className="homeCont">
        <section className="homeCont__header">
          <div className="banner">
            <div className="banner__heading">
              <Link to="/accomodations">
                <h3>Hotels</h3>
              </Link>
            </div>
            <div className="banner__img">
              <Link to="/accomodations">
                <img src={bed} alt="b&b"></img>
              </Link>
            </div>
          </div>

          <div className="banner">
            <div className="banner__heading">
              <Link to="/accomodations">
                <h3>Guesthouses</h3>
              </Link>
            </div>
            <div className="banner__img">
              <Link to="/accomodations">
                <img src={guest} alt="guesth"></img>
              </Link>
            </div>
          </div>
        </section>
        <section className="homeCont__why">
          <div className="homeCont__why__heading">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="homeCont__why__desp">
            <h3>
              We provide you all the facilities at the same place, and our all
              accommodations includes all these facilities
            </h3>
          </div>
        </section>
        <section className="homeCont__services">
          <div className="homeCont__services__con">
            <div className=" homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={wifi} alt="wifi"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Internet</h3>
              </div>
            </div>
            <div className="homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={room} alt="room"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>RoomService</h3>
              </div>
            </div>
            <div className="homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={spa} alt="spa"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Spa</h3>
              </div>
            </div>
            <div className="homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={drink} alt="drinks"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Drinks</h3>
              </div>
            </div>
          </div>
          <div className="homeCont__services__con">
            <div className=" homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={swim} alt="swim"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Swimming</h3>
              </div>
            </div>
            <div className=" homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={car} alt="car"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Carpark</h3>
              </div>
            </div>
            <div className=" homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={rest} alt="restaurant"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Restaurant</h3>
              </div>
            </div>
            <div className=" homeCont__services__con__icon">
              <div className="homeCont__services__con__icon__img">
                <img src={tv} alt="tv"></img>
              </div>
              <div className="homeCont__services__con__icon__txt">
                <h3>Tv</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="homeCont__reviews">
          <div className="homeCont__reviews__head">
            <h2>Customer Reviews</h2>
          </div>

          <div className="row homeCont__reviews__body">
            <div className="homeCont__reviews__body__review">
              <div className="homeCont__reviews__body__review__img">
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star"></img>
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className="homeCont__reviews__body__review__text">
                <p>
                  “I have been traveling a lot and stayed in many best luxury
                  hotels in French and Italian rivieras but this hotel tops it
                  all with amazingurban chic design, helpful and attentive staff
                  also the most wonderful dining”
                </p>
              </div>
            </div>

            <div className="homeCont__reviews__body__review">
              <div className="homeCont__reviews__body__review__img">
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star"></img>
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className="homeCont__reviews__body__review__text">
                <p>
                  “Breakfast was delicious: make time for a lengthy session if
                  you can! Take your swimmers and gym kit, as the Spa was
                  luxurious and the gym was seriously well stocked with all the
                  latest stuff.”
                </p>
              </div>
            </div>

            <div className="homeCont__reviews__body__review">
              <div className="homeCont__reviews__body__review__img">
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star"></img>
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
                <div className="homeCont__reviews__body__review__img__star">
                  <img src={star} alt="star" />
                </div>
              </div>
              <div className="homeCont__reviews__body__review__text">
                <p>
                  “Reminds me of a classic English luxury hotel in terms of
                  style, furnishing etc. Beautiful rooms, newly refurbished
                  fitness facilities downstairs, great service, perfect location
                  in the centre of Oslo.”
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
