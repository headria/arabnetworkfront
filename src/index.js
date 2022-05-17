import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animated.css";
import "./assets/css/default.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/magnific.dark.css";
import "./assets/css/magnific.rtl.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./i18n";
import { MoralisProvider } from "react-moralis";

function Application() {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <MoralisProvider
      serverUrl="https://her2fazw2iuu.usemoralis.com:2053/server"
      appId="nm2gB4AUIzfoQbB5Y8FTO6JpxyfUvHZ2FDmsvgP1"
    >
      <App />
    </MoralisProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Application />);
