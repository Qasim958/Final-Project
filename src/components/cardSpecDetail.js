import { Link, useLocation } from "react-router-dom";
import React from "react";

const cardSpecComponent = (props) => {
  return (
    <div className="card CardDetail">
      <img className="card-img-top" src={props.imageUrl} alt="Card imo cap" />
      <div className="card-body">
        <h1 className="card-title">{props.name}</h1>
        <h2 className="card-text">{props.price} kr / Night</h2>
        <div className="row   ">
          <div className="row  CardDetail__max">
            <h3 className="card-text">Max guest : {props.maxGuests}</h3>
          </div>
          <div className="row  CardDetail__self">
            <h3 className="card-text">Self Catering : {props.selfCatering}</h3>
          </div>
        </div>
        <div className="row ">
          <h3>Description </h3>
          <h4>{props.description}</h4>
        </div>
        <div className="CardDetail__button submit">
          <Link to={`/enquiry`} state={props.id}>
            <button>Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cardSpecComponent;
