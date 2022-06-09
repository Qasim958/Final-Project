import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GET_ESTABLISHMENT_RECORD } from "../api";
import CardSpecComponent from "../components/cardSpecDetail";
import { getApiData } from "../utils/fetchApiData";

export default function CardSpecific(props) {
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setId(location.state);
  }, []);

  useEffect(() => {
    async function getData() {
      if (id > 0) {
        const response = await getApiData(GET_ESTABLISHMENT_RECORD, { id });
        if (response) {
          setData(response);
        }
      }
    }
    getData();
  }, [id]);

  return (
    <>
      <main className="SpecCont">
        <section className="SpecCont__content">
          {id !== null && data ? (
            <CardSpecComponent
              id={data.id}
              imageUrl={data.imageUrl}
              name={data.establishmentName}
              price={data.price}
              maxGuests={data.maxGuests}
              selfCatering={data.selfCatering ? "Yes" : "No"}
              description={data.description}
            />
          ) : (
            <h2>no post found</h2>
          )}
        </section>
      </main>
    </>
  );
}
