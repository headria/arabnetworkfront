import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom-animated.css";
import "./assets/css/font-awesome.min.css";
import '../src/components/Styles/styles.scss'
import "./i18n";
import { MoralisProvider } from "react-moralis";
import ThemeContextWrapper from "./components/Layouts/Themes/themeContextWrapper";


function Application() {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <MoralisProvider
      serverUrl="https://her2fazw2iuu.usemoralis.com:2053/server"
      appId="nm2gB4AUIzfoQbB5Y8FTO6JpxyfUvHZ2FDmsvgP1"
    >
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </MoralisProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Application />);
