import React from "react";
import CardSpecComponent from "../components/cardSpecDetail";
import Estresp from "../server/establishments.json";

export default function CardSpecific(props) {
  const filterPara = props.match.params.id;

  return (
    <>
      <main className="SpecCont">
        <section className="SpecCont__content">
          {filterPara !== null ? (
            Estresp.map((data) => {
              if (filterPara === data.id) {
                return (
                  <CardSpecComponent
                    key={data.id}
                    id={data.id}
                    imageUrl={data.imageUrl}
                    name={data.establishmentName}
                    price={data.price}
                    maxGuests={data.maxGuests}
                    selfCatering={data.selfCatering ? "Yes" : "No"}
                    description={data.description}
                  />
                );
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
}
