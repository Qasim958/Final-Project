import React from "react";

export default function Searchbar(props) {
  return (
    <>
    
      <div className=" searcharea ">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search by name"
            id="dest"
          ></input>
          <button className="btn btn-primary">
            <h4>Search</h4>
          </button>
        </div>
      </div>
    </>
  );
}
