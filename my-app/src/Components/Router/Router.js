import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//This is the router page, which uses the Router from react-router-dom, as well as a Switch statement to link each file together into one cohesive single-page experience
import { PersonComp } from "../Person/PersonComp.js";
import { ProductComp } from "../Product/ProductComp.js";
import { FeedComp } from "../Feed/FeedComp.js";
import { ProfileComp } from "../Profile/ProfileComp.js";
import { HomeComp } from "../Home/Home.js";

export const Routerr = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addperson">Add New Person</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/product">Add Product</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <ProfileComp />
          </Route>
          <Route path="/addperson">
            <PersonComp />
          </Route>
          <Route path="/feed">
            <FeedComp />
          </Route>
          <Route path="/product">
            <ProductComp />
          </Route>
          <Route path="/">
            <HomeComp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Routerr;
