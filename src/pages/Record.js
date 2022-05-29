import React from "react";
import AdminSidebar from "../components/adminSide";
import EnqData from "../server/enquiries";

const EnquiryRecord = (props) => {
  return (
    <>
      <main className="recordCont">
        <section className="recordCont__left">
          <AdminSidebar />
        </section>
        <section className="recordCont__right">
          <div className="recordCont__right__recordTable">
            <h2>Dashboard / Enquiry record</h2>
           <table className="table table-bordered table-hover 
            table-wrapper-scroll-y table-striped">
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
              {EnqData === null ? (
                <h2>no record</h2>
              ) : (
                EnqData.map((data, index) => {
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
          </div>
        </section>
      </main>
    </>
  );
};
export default EnquiryRecord;
