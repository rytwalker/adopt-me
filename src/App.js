/*
import React, { useState, lazy, Suspense } from "react";
// import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

const Details = lazy(() => import("./Details"));

function App() {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar />
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
*/

import React, { useState } from "react";
// import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

function App() {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
