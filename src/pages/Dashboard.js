import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/adminSide";
import { getSidebarFromLocalStorage } from "../utils/localStorage";
import AddEstab from "./Add-estab";
import AdminContact from "./AdminContact";
import EstRecord from "./Est-record";
import EnquiriesRecord from "./EnquiriesRecord";

export default function Dashboard(props) {
  const [selected, setSelected] = useState("estAdd");
  useEffect(() => {
    setSelected(getSidebarFromLocalStorage());
  }, []);
  return (
    <>
      {
        <main className="dashboard">
          <section className="dashboard__left">
            <AdminSidebar state={setSelected} />
          </section>
          <section className="dashboard__right">
            {selected === "estAdd" ? (
              <AddEstab />
            ) 
            : selected === "estRec" ? (
              <EstRecord />) 
              : selected === "enqRec" ? (
              <EnquiriesRecord />
            ) : selected === "conRec" ? (
              <AdminContact />
            ) : null}
          </section>
        </main>
      }
    </>
  );
}
