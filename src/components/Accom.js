import React from 'react';
import { Link } from 'react-router-dom';

const AccomComponent = (props) => {
    return(
        <div className="col-md-4 accomodation" key={props.id}>
        <div className="card accoCont__body__card">
            <Link to={`/cardSpecComponent`} state={props.id}> <img className="card-img-top" src={props.imageUrl} alt="Card imo cap"/></Link>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <h3 className="card-text">{props.price} kr / Night</h3>
            </div>
        </div>    
    </div>
    )
}

export default AccomComponent;