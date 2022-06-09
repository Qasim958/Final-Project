import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import App from "./App";
import Home from "./pages/Home";
import Accomodations from "./pages/Accomodations";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import Enquiry from "./pages/Enquiry";

import Dashboard from "./pages/Dashboard";
import EstRecord from "./pages/Est-record";
import AdminContact from "./pages/AdminContact";
import EnquiriesRecord from "./pages/EnquiriesRecord";
import CardSpecComponent from "./pages/CardSpec";
import Redirect from "./components/Redirect";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodations" element={<Accomodations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cardSpecComponent" element={<CardSpecComponent />} />
        <Route path="/est-record" element={<EstRecord />} />
        <Route path="/admincontact" element={<AdminContact />} />
        <Route path="/enquries" element={<EnquiriesRecord />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route
          path="/faceb"
          render={(props) => (
            <Redirect {...props} loc="https://www.facebook.com" />
          )}
        />
        <Route
          path="/twitte"
          render={(props) => (
            <Redirect {...props} loc="https://www.twitter.com" />
          )}
        />
        <Route
          path="/instag"
          render={(props) => (
            <Redirect {...props} loc="https://www.instagram.com" />
          )}
        />
        <Route
          path="/tripm"
          render={(props) => (
            <Redirect {...props} loc="https://www.tripadvisor.com" />
          )}
        />
      </Routes>
    </App>
  </Router>
);
