import React, { useEffect } from "react";
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import ContData from "../server/contact";

const AdminContact = (props) => {
  useEffect(()=>{
    async function contact(){
      
    }
  })
  return (
    <>
      <main className="adminCont">
        <div className="adminCont__left">
          <AdminSidebar />
        </div>
        <div className="adminCont__right">
          <div className="adminCont__right__adminTable">
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

              {ContData === null ? (
                <h2>no record</h2>
              ) : (
                ContData.map((data, index) => {
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
                }).reverse()
              )}
            </table>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminContact;
