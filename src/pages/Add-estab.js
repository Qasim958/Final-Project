import React, { useState } from "react";
import { ADD_ESTABLISHMENT } from "../api";
import { getApiData } from "../utils/fetchApiData";

export default function AddEstab(props) {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    price: 0.0,
    maxGuests: 0,
    lat: 0.0,
    lon: 0.0,
    description: "",
    image: "",
    catering: false,
  });

  const handleChange = async (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "id":
        setData({ ...data, id: value });
        break;

      case "name":
        setData({ ...data, name: value });

        break;

      case "email":
        setData({ ...data, email: value });
        break;

      case "price":
        setData({ ...data, price: value });

        break;

      case "guests":
        setData({ ...data, guests: value });

        break;

      case "lat":
        setData({ ...data, lat: value });
        break;

      case "lon":
        setData({ ...data, lon: value });
        break;

      case "description":
        setData({ ...data, description: value });
        break;

      case "image":
        setData({ ...data, image: value });
        break;

      case "catering":
        setData({ ...data, catering: value });
        break;

      default:
        break;
    }
    console.log({ data });
  };

  const handleSubmit = async (e) => {
    const isAdded = await getApiData(ADD_ESTABLISHMENT, data);
    if (isAdded.successful) {
      alert("Successful");
    }
  };
  return (
    <>
      {
        <div className="addEstabCont">
          <h2>Dashboard / Add Establishment</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__id--input">
                <input
                  type="number"
                  name="id"
                  className="form-control"
                  id="id"
                  placeholder="ID"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__name--input">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="establishmentName"
                  placeholder=" Establishment Name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__email--input">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="establishmentEmail"
                  placeholder="Establishment Email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__price--input">
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="Price/night Kr"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__guest--input">
                <input
                  type="number"
                  name="guests"
                  className="form-control"
                  id="maxGuests"
                  placeholder="Max guests"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__lat--input">
                <input
                  type="text"
                  name="lat"
                  className="form-control"
                  id="googleLat"
                  placeholder="Google Coordinates Latitude"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__long--input">
                <input
                  type="text"
                  name="lon"
                  className="form-control"
                  id="googleLong"
                  placeholder="Google Coordinates Longitude"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__desc--input">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__image--input">
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  id="imageUrl"
                  placeholder="Image URL"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="addEstabCont__field form-group">
              <div className="addEstabCont__self__label">
                <label htmlFor="selfCatering">Self-catering</label>
              </div>
              <div className="addEstabCont__self__options">
                <div className="addEstabCont__self__options__true">
                  <div className="addEstabCont__self__options__true__label">
                    <label htmlFor="true">True</label>
                  </div>
                  <div className="addEstabCont__self__options__true--input">
                    <input
                      type="radio"
                      id="true"
                      name="catering"
                      value="true"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="addEstabCont__self__options__false">
                  <div className="addEstabCont__self__options__false__label">
                    <label htmlFor="false">False</label>
                  </div>
                  <div className="addEstabCont__self__options__false--input">
                    <input
                      type="radio"
                      id="false"
                      name="catering"
                      value="false"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="conCont__contForm__submit">
              <button>Add</button>
            </div>
          </form>
        </div>
      }
    </>
  );
}
