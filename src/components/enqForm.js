import React from "react";

const EnqFormComponent = (props) => {
  return (
    <div className="enqForm">
      <h2>Book Your Accomodation</h2>
      <form
        method="POST"
        action="http://localhost:8080/HOLIDAZE/client/src/server/enquiry-success.php"
      >
        <div className="enqForm__estab">
          <div className="">
            <label for="estab">Establishment</label>
          </div>
          <div className="">
            <input
              type="text"
              value={props.name}
              name="establishment"
              id="establishment"
              readOnly
            />
          </div>
        </div>
        <div className="row enqForm__name">
          <div className="">
            <label for="name">Fullname</label>
          </div>
          <div className="">
            <input type="text" name="clientName" id="clientName" />
          </div>
        </div>
        <div className="row  enqForm__email">
          <div className="">
            <label for="email">Email</label>
          </div>
          <div className="">
            <input type="text" name="email" id="email" />
          </div>
        </div>
        <div className="row  enqForm__checkIn">
          <div className="">
            <label for="checkIn">Checkin</label>
          </div>
          <div className="">
            <input type="date" name="checkin" id="checkin" />
          </div>
        </div>
        <div className="row enqForm__checkOut">
          <div className="">
            <label for="checkOut">Checkout</label>
          </div>
          <div className="">
            <input type="date" name="checkout" id="checkout" />
          </div>
        </div>
        <div className="row  enqForm__people">
          <div className="enqForm__people__adult">
            <div className="">
              <label for="adult">Adult</label>
            </div>
            <div className="    ">
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
            <div className="col-md-8 col-xs-8">
              <label for="children">Children</label>
            </div>
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
        <div className="row  enqForm__note">
          <div className="">
            <label for="note">Note</label>
          </div>
          <div className="">
            <textarea name="notes" id="notes" rows="4" cols="27"></textarea>
          </div>
        </div>
        <div className="row enqForm__submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnqFormComponent;
