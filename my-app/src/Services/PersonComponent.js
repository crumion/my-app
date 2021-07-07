import React from "react";
import Parse from "parse";

export const PersonComponent = () => {
  // State variables

  //Async function similar to the other addX functions found in this folder.
  async function addPerson() {
    try {
      // create a new Parse Object instance
      var inputVal1 = document.getElementById("newProduct").value;
      document.getElementById("p1").innerHTML = inputVal1;
      var inputVal2 = document.getElementById("newPrice").value;
      document.getElementById("p2").innerHTML = inputVal2;
      var inputVal3 = document.getElementById("newName").value;
      document.getElementById("p3").innerHTML = inputVal3;
      var inputVal4 = document.getElementById("newEmail").value;
      document.getElementById("p4").innerHTML = inputVal4;
      const Person = new Parse.Object("Person");
      // define the attributes you want for your Object
      Person.set("product", inputVal1);
      Person.set("price", inputVal2);
      Person.set("name", inputVal3);
      Person.set("email", inputVal4);
      // save it on Back4App Data Store
      await Person.save();
      alert("Person saved!");
    } catch (error) {
      console.log("Error saving new person: ", error);
    }
  }
  //Function which searches through the database to return the name, email, product, and price of product, of the person who submitted their product previously
  async function read() {
    var inputVal1 = document.getElementById("ReadName").value;
    const Person = Parse.Object.extend("Person");
    const query = new Parse.Query(Person);
    query.equalTo("name", inputVal1);
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const product = object.get("product");
        const price = object.get("price");
        const name = object.get("name");
        const email = object.get("email");

        document.getElementById("Pname").innerHTML = "Name: " + name;
        document.getElementById("Pproduct").innerHTML = "Product: " + product;
        document.getElementById("Pprice").innerHTML = "Price: $" + price;
        document.getElementById("Pemail").innerHTML = "Email: " + email;
      }
    } catch (error) {
      console.error("Error while fetching Person", error);
    }
  }

  return (
    <div>
      <hr></hr>
      <h3>Not from around here, eh?</h3>
      <p>No problem, we've got you covered.</p>
      <div className="ProductBox">
        <input type="text" placeholder="Enter your product" id="newProduct" />
      </div>
      <div className="PriceBox">
        <input type="text" placeholder="Enter price..." id="newPrice" />
      </div>
      <div className="NameBox">
        <input type="text" placeholder="Enter your name..." id="newName" />
      </div>
      <div className="EmailBox">
        <input type="text" placeholder="Enter your email..." id="newEmail" />
      </div>
      <br />
      <button onClick={addPerson}>Add Person</button>
      <p id="p1"></p>
      <p id="p2"></p>
      <p id="p3"></p>
      <p id="p4"></p>
      <hr></hr>
      <h3>Oh, you've been here before?</h3>
      <p>Enter your name and product below.</p>

      <div className="ReadNameBox">
        <input type="text" placeholder="Enter your name..." id="ReadName" />
      </div>
      <button onClick={read}>Search by Name</button>
      <div className="Fields">
        <p id="Pname"></p>
        <p id="Pemail"></p>
        <p id="Pproduct"></p>
        <p id="Pprice"></p>
      </div>
    </div>
  );
};
