import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Loader from "./components/Helper/Loader";
import ScrollToTop from "./components/Helper/ScrollToTop";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Assets from "./components/Pages/AssetsPage";
import Ios from "./components/Pages/Ios";
import Hala from "./components/Pages/Hala";
import Privacy from "./components/Pages/Privacy";
import TermOfService from "./components/Pages/TermOfService";
import Nft from "./components/Pages/Nft";
import Community from "./components/Pages/Community";
import GatePay from "./components/Pages/GatePay";
import Exchange from "./components/Pages/Exchange";
import "react-toastify/dist/ReactToastify.css";
import ArabNetwork from "./components/Pages/ArabNetwork";

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
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`appie-visible ${loading === false ? "active" : ""}`}>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} exact={true} />
              <Route path="/about" element={<About />} exact={true} />
              <Route path="/assets" element={<Assets />} exact={true} />
              <Route path="/ios" element={<Ios />} exact={true} />
              {/* <Route path="/contact" element={<Contact />} exact={true} /> */}
              <Route path="/hala-ai" element={<Hala />} exact={true} />
              <Route
                path="/privacy_and_term"
                element={<Privacy />}
                exact={true}
              />
              <Route
                path="/term_of_service"
                element={<TermOfService />}
                exact={true}
              />
              <Route path="/nft" element={<Nft />} exact={true} />
              <Route path="/community" element={<Community />} exact={true} />
              <Route path="/gate_pay" element={<GatePay />} exact={true} />
              <Route path="/exchange" element={<Exchange />} exact={true} />

              <Route path="/arabnetwork" element={<ArabNetwork />} exact={true} />

              <Route element={<Error />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default RoutesList;
