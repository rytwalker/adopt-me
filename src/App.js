import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Adopt Me</h1>
        </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
