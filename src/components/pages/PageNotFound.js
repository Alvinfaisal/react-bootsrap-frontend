import React from "react";
import Button from "react-bootstrap/Button";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="hide-navbar">
      <h3 className="p-4">Page you are looking for does not exist :( </h3>

      <button type="button" class="btn btn-primary">
        Normal bootstrap button
      </button>
      {" - "}
      <Button variant="primary">React-Bootstrap button</Button>

      <NavLink className="nav-link" aria-current="page" exact to="/">
        Home
      </NavLink>
    </div>
  );
}

export default PageNotFound;
