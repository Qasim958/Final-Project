import React, { useState } from "react";
import AccomComponent from "../components/Accom";
import Estresp from "../server/establishments.json";
import { Link } from "react-router-dom";

export default function Accomodations(props) {
  const [type, setType] = useState("hotel");

  // Filters
  const [filterResults, setfilter] = useState([]);

  const [isResultFiltered, setIsResultfilt] = useState(false);
  let filterApi = Estresp;
  const handleSubmit = (input) => {
    input.preventDefault();

    filterApi = filterApi.filter((value) => {
      return value.establishmentName
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    setfilter(filterApi);
    setIsResultfilt(true);
  };
  const price0T1FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.price >= 0 && value.price <= 1000;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const price1T2FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.price > 1000 && value.price <= 2000;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const maxguest0T1FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.maxGuests >= 0 && value.maxGuests <= 10;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const maxguest1T2FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.maxGuests > 10 && value.maxGuests <= 20;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const selfCatYesFilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.selfCatering === "true";
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const selfCatNoFilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.selfCatering === "false";
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };

  return (
    <>
      <main className="accoCont">
        <section>
          <form>
            <div className="row searcharea col-md-8 col-md-offset-2">
              <div className="col-md-12 form-group">
                <input
                  className="form-control"
                  onChange={handleSubmit}
                  name="searchPhrase"
                  type="text"
                  placeholder="Search by name"
                  id="dest"
                ></input>
                <button className="btn btn-primary">
                  <h4>Search</h4>
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="row accoCont__header">
          <div className=" col-md-9 accoCont__header__left">
            <div className="banner">
              <div className="banner__heading">
                <Link to="/accomodations">
                  <h3
                    onClick={(e) => setType("hotel")}
                    style={
                      type == "hotel" ? { color: "Red" } : { color: "Black" }
                    }
                  >
                    Hotels
                  </h3>
                </Link>
              </div>
            </div>
            <div className="banner bb">
              <hr className="bar" />
            </div>
            <div className="banner">
              <div className="banner__heading">
                <Link to="/accomodations">
                  <h3
                    onClick={(e) => setType("guesthouse")}
                    style={
                      type == "guesthouse"
                        ? { color: "Red" }
                        : { color: "Black" }
                    }
                  >
                    Guesthouses
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 accoCont__header__right"></div>
        </section>

        <section className="accoCont__body">
          <div className="accoCont__body__main">
            <div className="row ">
              {isResultFiltered
                ? filterResults.map((data, index) => {
                    return (
                      <AccomComponent
                        key={index}
                        id={data.id}
                        imageUrl={data.imageUrl}
                        name={data.establishmentName}
                        price={data.price}
                      />
                    );
                  })
                : Estresp.map((data, index) => {
                    return type == data.type ? (
                      <AccomComponent
                        key={index}
                        id={data.id}
                        imageUrl={data.imageUrl}
                        name={data.establishmentName}
                        price={data.price}
                      />
                    ) : null;
                  })}
            </div>
          </div>
          <div className="accoCont__body__sideBar">
            <div className="accoCont__body__sideBar__filter">
              <div className="accoCont__body__sideBar__filter__heading">
                <h3>Prices</h3>
              </div>
              <div className="accoCont__body__sideBar__filter__body">
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={price0T1FilterMethod} />
                  </div>
                  <div className="accoCont__body__sideBar__filter__body__cat--txt">
                    <h3>0-1000</h3>
                  </div>
                </div>
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={price1T2FilterMethod} />
                  </div>
                  <div className="accoCont__body__sideBar__filter__body__cat--price">
                    <h3>1000-2000</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accoCont__body__sideBar__filter">
              <div className="accoCont__body__sideBar__filter__heading">
                <h3>Max Guests</h3>
              </div>
              <div className="accoCont__body__sideBar__filter__body">
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={maxguest0T1FilterMethod} />
                  </div>
                  <div className="accoCont__body__sideBar__filter__body__cat--txt">
                    <h3>0-10</h3>
                  </div>
                </div>
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={maxguest1T2FilterMethod} />
                  </div>
                  <div className=" accoCont__body__sideBar__filter__body__cat--txt">
                    <h3>10-20</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="accoCont__body__sideBar__filter">
              <div className="accoCont__body__sideBar__filter__heading">
                <h3>Max Guests</h3>
              </div>
              <div className="accoCont__body__sideBar__filter__body">
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={selfCatYesFilterMethod} />
                  </div>
                  <div className="accoCont__body__sideBar__filter__body__cat--txt">
                    <h3>Yes</h3>
                  </div>
                </div>
                <div className="accoCont__body__sideBar__filter__body__cat">
                  <div className="accoCont__body__sideBar__filter__body__cat--check">
                    <input type="checkbox" onClick={selfCatNoFilterMethod} />
                  </div>
                  <div className="accoCont__body__sideBar__filter__body__cat--txt">
                    <h3>No</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
