import React, { useEffect, useState } from "react";
import { GET_ESTABLISHMENT_RECORDS } from "../api";
import { getApiData } from "../utils/fetchApiData";

export default function EstRecord(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getEstablishmentRecord() {
      const response = await getApiData(GET_ESTABLISHMENT_RECORDS);
      setData(await response);
    }
    getEstablishmentRecord();
  },[]);
  return (
    <>
      <div className="estRecordCont">
        <h2>Dashboard / Establishment record</h2>
        <table className=" table table-bordered table-hover table-wrapper-scroll-y table-striped">
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

          {data.length <= 0 ? (
            <h2>no record</h2>
          ) : (
            data.map((data, index) => {
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
    </>
  );
}
