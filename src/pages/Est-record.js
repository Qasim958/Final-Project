import React from "react";
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import EstData from "../server/establishments";

export default function EstRecord(props) {
  return (
    <>
      <div className="estRecordCont">
        <div className="estRecordCont__left">
          <AdminSidebar />
        </div>
        <div className="estRecordCont__right">
          <div className="estRecordCont__right__Table">
            <table className=" table table-bordered table-hover table-wrapper-scroll-y table-striped">
              <div className="">
                <h2>Dashboard / Establishment record</h2>
              </div>
              <thead>
                <tr>
                  <th>EQ-ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Image</th>
                  <th>Price/Kr</th>
                  <th>Max-Guests</th>
                  <th>Lat</th>
                  <th>Long</th>
                  <th>Description</th>
                  <th>SelfCatering</th>
                </tr>
              </thead>

              {EstData === null ? (
                <h2>no record</h2>
              ) : (
                EstData.map((data, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.establishmentName}</td>
                        <td>{data.establishmentEmail}</td>
                        <td>
                          <img
                            src={data.imageUrl}
                            width="50px"
                            height="50px"
                            alt="imo"
                          />
                        </td>
                        <td>{data.price}</td>
                        <td>{data.maxGuests}</td>
                        <td>{data.googleLat}</td>
                        <td>{data.googleLong}</td>
                        <td>{data.description}</td>
                        <td>{data.selfCatering}</td>
                      </tr>
                    </tbody>
                  );
                }).reverse()
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
