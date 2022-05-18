import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Loader from "./components/Helper/Loader";

import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

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

            <Route path="/" element={<Home />} exact={true} />
            <Route path="/about" element={<About />} exact={true} />
            <Route element={<Error />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default RoutesList;
