import React, { useEffect } from "react";

const Redirect = (props) => {
  useEffect(() => {
    window.location = props.loc;
  });
  return <section>Redirecting...</section>;
};

export default Redirect;
