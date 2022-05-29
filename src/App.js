import React from "react";
import Navigation from "./components/navigation";
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/navigation";
import FooterComponent from "./components/footer";

const App = (props) => {
  return (
    <div className="App">
      <NavComponent show={true} />
      {props.children}
      <FooterComponent />
    </div>
  );
};
export default App;
