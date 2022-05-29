import { Link } from 'react-router-dom';
import React from 'react';

const cardSpecComponent = (props) => {
    return(
        <div className="card CardDetail">
            <img className="card-img-top" src={props.imageUrl} alt="Card imo cap"/>
            <div className="card-body">
                <h1 className="card-title">{props.name}</h1> 
                <h2 className="card-text">{props.price} kr / Night</h2> 
                <div className="row col-md-10 col-md-offset-1">
                    <div className="row col-md-6 CardDetail__max">
                        <h3 className="card-text">Max guest : {props.maxGuests}</h3>
                    </div>
                    <div className="row col-md-6 CardDetail__self">
                        <h3 className="card-text">Self Catering : {props.selfCatering}</h3>
                    </div>
                </div>
                <div className="row col-md-8 col-md-offset-2">
                    <h3>Description :</h3>
                    <h4>{props.description}</h4>
                </div>
                <div className="col-md-6 col-md-offset-3 CardDetail__button"><Link to={`/enquiry/${props.id}`}><button>Book now</button></Link></div>    
            </div>
        </div>    
    )
}

export default cardSpecComponent;
