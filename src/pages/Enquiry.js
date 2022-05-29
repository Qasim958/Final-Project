import React from "react";
import FooterComponent from "../components/footer";
import EnqForm from "../components/enqForm";
import Header from "../components/header";
import Estresp from "../server/establishments.json";
import { useLocation } from "react-router";

const Enquiry = (props) => {
  const location = useLocation();
  const filterPara = location.state;
  
  return (
    <>
      <main className="enqCont">
        <section className="row">
          {filterPara !== null ? (
            Estresp.map((data) => {
              if (filterPara === data.id) {
                return <EnqForm name={data.establishmentName} />;
              }
              return null;
            })
          ) : (
            <h2>no post found</h2>
          )}
        </section>
      </main>
    </>
  );
};
export default Enquiry;
