import React, { useEffect } from "react";
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import { Navigate } from "react-router";
import { getLoginCredentialsFromLocalStorage } from "../utils/localStorage";

export default function AddEstab(props) {

  return (
    <>
      {
        <main className="addEstabCont">
          <div className="addEstabCont__left">
            <AdminSidebar loginStatus={props.loginStatus} />
          </div>
          <div className="addEstabCont__right">
            <div className="addEstabCont__right__Form">
              <h2>Dashboard / Add Establishment</h2>
              <form
                method="POST"
                action="http://localhost:8080/seedtotree/client/src/server/add-establishments-success.php"
              >
                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__name--input">
                    <input
                      type="text"
                      name="establishmentName"
                      className="form-control"
                      id="establishmentName"
                      placeholder=" Establishment Name"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__email--input">
                    <input
                      type="text"
                      name="establishmentEmail"
                      className="form-control"
                      id="establishmentEmail"
                      placeholder="Establishment Email"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__price--input">
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      id="price"
                      placeholder="Price/night Kr"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__guest--input">
                    <input
                      type="number"
                      name="maxGuests"
                      className="form-control"
                      id="maxGuests"
                      placeholder="Max guests"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__lat--input">
                    <input
                      type="text"
                      name="googleLat"
                      className="form-control"
                      id="googleLat"
                      placeholder="Google Coordinates Latitude"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__long--input">
                    <input
                      type="text"
                      name="googleLong"
                      className="form-control"
                      id="googleLong"
                      placeholder="Google Coordinates Longitude"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__desc--input">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      id="description"
                      placeholder="Description"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__id--input">
                    <input
                      type="number"
                      name="id"
                      className="form-control"
                      id="id"
                      placeholder="ID"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__image--input">
                    <input
                      type="text"
                      name="imageUrl"
                      className="form-control"
                      id="imageUrl"
                      placeholder="Image URL"
                    />
                  </div>
                </div>

                <div className="addEstabCont__right__Form__field form-group">
                  <div className="addEstabCont__right__Form__self__label">
                    <label htmlFor="selfCatering">Self-catering</label>
                  </div>
                  <div className="addEstabCont__right__Form__self__options">
                    <div className="addEstabCont__right__Form__self__options__true">
                      <div className="addEstabCont__right__Form__self__options__true__label">
                        <label htmlFor="true">True</label>
                      </div>
                      <div className="addEstabCont__right__Form__self__options__true--input">
                        <input
                          type="radio"
                          id="true"
                          name="selfCatering"
                          value="true"
                        />
                      </div>
                    </div>
                    <div className="addEstabCont__right__Form__self__options__false">
                      <div className="addEstabCont__right__Form__self__options__false__label">
                        <label htmlFor="false">False</label>
                      </div>
                      <div className="addEstabCont__right__Form__self__options__false--input">
                        <input
                          type="radio"
                          id="false"
                          name="selfCatering"
                          value="false"
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
          </div>
        </main>
      }
    </>
  );
}
