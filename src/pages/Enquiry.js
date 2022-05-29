import React from "react";
import FooterComponent from "../components/footer";
import EnqForm from "../components/enqForm";
import Header from "../components/header";
import Estresp from "../server/establishments.json";

const Enquiry = (props) => {
  const filterPara = props.match.params.id;
  return (
    <>
      <main className="enqCont">
        <div className="row">
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
        </div>
      </main>{" "}
    </>
  );
};
export default Enquiry;
