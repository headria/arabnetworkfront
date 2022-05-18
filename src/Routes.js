import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Loader from "./components/Helper/Loader";

import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Pages/Home";

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
          <Routes>

            <Route path="/" element={<Home />} exact={true} />
            <Route element={<Error />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default RoutesList;
