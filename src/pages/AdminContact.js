import React, { useEffect, useState } from "react";
import { GET_CONTACT_RECORDS } from "../api";
import { getApiData } from "../utils/fetchApiData";

const AdminContact = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getEstablishmentRecord() {
      const response = await getApiData(GET_CONTACT_RECORDS);
      setData(await response);
    }
    getEstablishmentRecord();
  }, []);
  return (
    <>
      <main className="adminCont">
        <h2>Dashboard / Contacts</h2>
        <table className=" table table-bordered table-hover table-wrapper-scroll-y table-striped">
          <thead>
            <tr>
              <th>A-ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>

          {data.length <= 0 ? (
            <h2>no record</h2>
          ) : (
            data
              .map((data, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.clientName}</td>
                      <td>{data.email}</td>
                      <td>{data.message}</td>
                    </tr>
                  </tbody>
                );
              })
              .reverse()
          )}
        </table>
      </main>
    </>
  );
};
export default AdminContact;
