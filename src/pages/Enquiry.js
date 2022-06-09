import React, { useEffect, useState } from "react";
import EnqForm from "../components/enqForm";
import { useLocation } from "react-router";
import { getApiData } from "../utils/fetchApiData";
import { GET_ESTABLISHMENT_RECORDS } from "../api";

const Enquiry = (props) => {
  const location = useLocation();
  const filterPara = location.state;

  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      const response = await getApiData(GET_ESTABLISHMENT_RECORDS);
      if (response) {
        setData(response);
      }
    }
    getData();
  });
  return (
    <>
      <div className="enqCont">
        <div className="row">
          {filterPara !== null ? (
            data.map((data, i) => {
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
