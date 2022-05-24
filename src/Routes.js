import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Loader from "./components/Helper/Loader";

import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Private from "./components/Pages/Private";
import TermOfServies from "./components/Pages/TermOfServies";
import IntellectualProperty from "./components/Pages/IntellectualProperty";
import ProhibitedUses from "./components/Pages/ProhibitedUses";
import Trademarks from "./components/Pages/Trademarks";
import EntireAgreement from "./components/Pages/EntireAgreement";
import ComingSoon from "./components/Pages/ComingSoon";

function RoutesList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      {loading && (
        <div className={`arab-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`arab-visible ${loading === false ? "active" : ""}`}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<ComingSoon />} exact={true} />
            <Route path="/home" element={<Home />} exact={true} />
            <Route path="/about" element={<About />} exact={true} />
            <Route path="/contact" element={<Contact />} exact={true} />
            <Route path="/private_policy" element={<Private />} exact={true} />
            <Route path="/term_of_services" element={<TermOfServies />} exact={true} />
            <Route path="/intellectual_property" element={<IntellectualProperty />} exact={true} />
            <Route path="/prohibited_uses" element={<ProhibitedUses />} exact={true} />
            <Route path="/trademarks" element={<Trademarks />} exact={true} />
            <Route path="/entire_agreement" element={<EntireAgreement />} exact={true} />
            <Route element={<Error />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default RoutesList;
