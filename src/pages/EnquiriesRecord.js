import React, { useEffect, useState } from "react";
import { GET_ENQUIRY_RECORDS } from "../api";
import { getApiData } from "../utils/fetchApiData";

const EnquiriesRecord = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getEstablishmentRecord() {
      const response = await getApiData(GET_ENQUIRY_RECORDS);
      setData(await response);
    }
    getEstablishmentRecord();
  },[]);
  return (
    <>
      <section className="recordCont">
        <h2>Dashboard / Enquiry record</h2>
        <table
          className="table table-bordered table-hover 
            table-wrapper-scroll-y table-striped"
        >
          <thead>
            <tr>
              <th>EQ-ID</th>
              <th>Establishment</th>
              <th>Full name</th>
              <th>Email</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Adult</th>
              <th>Children</th>
              <th>Note</th>
            </tr>
          </thead>
          {data.length <= 0 ? (
            <h2>no record</h2>
          ) : (
            data.map((data, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index++}</td>
                    <td>{data.establishment}</td>
                    <td>{data.clientName}</td>
                    <td>{data.email}</td>
                    <td>{data.checkin}</td>
                    <td>{data.checkout}</td>
                    <td>{data.adults}</td>
                    <td>{data.children}</td>
                    <td>{data.notes}</td>
                  </tr>
                </tbody>
              );
            }).reverse()
          )}
        </table>
      </section>
    </>
  );
};
export default EnquiriesRecord;
