import React from "react";

const EnqFormComponent = (props) => {
  return(
     <div className="col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1 enqForm">
         <h2>Book Your Accomodation</h2> 
                <form method="POST" action="http://localhost:8080/HOLIDAZE/client/src/server/enquiry-success.php">
                <div className="row col-md-12 col-xs-12 enqForm__estab">
                    <div className="col-md-3 col-xs-3"><label for="estab">Establishment</label></div>
                    <div className="col-md-9 col-xs-9"><input type="text" value ={props.name} name="establishment" id="establishment" readOnly/></div>
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__name">
                    <div className="col-md-3 col-xs-3"><label for="name">Fullname</label></div>
                    <div className="col-md-9 col-xs-9"><input type="text" name="clientName" id="clientName"/></div>
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__email">
                    <div className="col-md-3 col-xs-3"><label for="email">Email</label></div>
                    <div className="col-md-9 col-xs-9"><input type="text" name="email" id="email"/></div>
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__checkIn">
                        <div className="col-md-3 col-xs-3"><label for="checkIn">Checkin</label></div>
                        <div className="col-md-9 col-xs-9"><input type="date" name="checkin" id="checkin"/></div>
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__checkOut">
                        <div className="col-md-3 col-xs-3"><label for="checkOut">Checkout</label></div>
                        <div className="col-md-9 col-xs-9"><input type="date" name="checkout" id="checkout"/></div>  
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__people">
                    <div className="col-md-6 col-xs-6 enqForm__people__adult">
                           <div className="col-md-8 col-xs-8"><label for="adult">Adult</label></div>
                           <div className="col-md-4 col-xs-4">
                               <select name="adults" id="adults">
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                                   <option value="5">5</option>
                                   <option value="6">6</option>
                                   <option value="7">7</option>
                                   <option value="8">8</option>
                                   <option value="9">9</option>
                                   <option value="10">10</option>
                               </select>
                           </div>
                    </div>
                    <div className="col-md-6 col-xs-6 enqForm__people__children">
                        <div className="col-md-8 col-xs-8"><label for="children">Children</label></div>
                        <div className="col-md-4 col-xs-4">
                               <select name="children" id="children">
                                   <option value="0">0</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                                   <option value="5">5</option>
                                   <option value="6">6</option>
                                   <option value="7">7</option>
                                   <option value="8">8</option>
                                   <option value="9">9</option>
                                   <option value="10">10</option>
                               </select>    
                        </div>
                    </div>     
                </div>
                <div className="row col-md-12 col-xs-12 enqForm__note">
                    <div className="col-md-4 col-xs-4"><label for="note">Note</label></div>
                    <div className="col-md-8 col-xs-8"><textarea name="notes" id="notes" rows="4" cols="27"></textarea></div>
                </div>
                <div className="row col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4 enqForm__submit">
                    <button>Submit</button>
                </div>     
            </form>         
    </div>         
   )
}

export default EnqFormComponent;



