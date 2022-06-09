import React from "react";
import EnqForm from "../components/enqForm";
import Estresp from "../server/establishments.json";
import { useLocation } from "react-router";

const Enquiry = (props) => {
  const location = useLocation();
  const filterPara = location.state;

  return (
    <>
      <div className="enqCont">
        <div className="row">
          {filterPara !== null ? (
            Estresp.map((data, i) => {
              if (filterPara === data.id) {
                return <EnqForm key={i} name={data.establishmentName} />;
              }
              return null;
            })
          ) : (
            <h2>no post found</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default Enquiry;
