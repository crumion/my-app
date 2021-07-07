// Import Parse minified version
import Parse from "parse";
import * as Env from "./environments";
import React from "react";
import { Routerr } from "./Components/Router/Router.js";

Parse.initialize(Env.PARSE_APPLICATION_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_HOST_URL;

export default function App() {
  return <Routerr />;
}
