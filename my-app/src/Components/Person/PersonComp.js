import React from "react";
import { PersonComponent } from "../../Services/PersonComponent.js";

//This uses PersonComponent, and gives it a header to introduce the page
export const PersonComp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wait A Minute... who ARE you?</h2>
        <PersonComponent />
      </header>
    </div>
  );
};

export default PersonComponent;
