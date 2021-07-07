import React from "react";
import Parse from "parse";

export const Profile = () => {
  //This function accepts input from the user and CREATES and WRITES to back4app, giving user a confirmation if the write and create were successful
  async function addProfile() {
    try {
      // create a new Parse Object instance
      var inputVal1 = document.getElementById("newName").value;
      document.getElementById("p1").innerHTML = inputVal1;
      var inputVal2 = document.getElementById("newEmail").value;
      document.getElementById("p2").innerHTML = inputVal2;
      var inputVal3 = document.getElementById("newPassword").value;
      document.getElementById("p3").innerHTML = inputVal3;
      const Profile = new Parse.Object("Profile");
      // define the attributes you want for your Object
      Profile.set("name", inputVal1);
      Profile.set("email", inputVal2);
      Profile.set("password", inputVal3);
      // save it on Back4App Data Store
      await Profile.save();
      alert("Profile saved!");
    } catch (error) {
      console.log("Error saving new profile: ", error);
    }
  }

  // This Async function reads data from back4app and reflects it to the user
  async function read() {
    var inputVal1 = document.getElementById("ReadName").value;
    const profile = Parse.Object.extend("Profile");
    const query = new Parse.Query(profile);
    query.equalTo("name", inputVal1);
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const name = object.get("name");
        const email = object.get("email");
        const password = object.get("password");

        document.getElementById("Pname").innerHTML = "Name: " + name;
        document.getElementById("Pemail").innerHTML = "Email: " + email;
        document.getElementById("Ppassword").innerHTML =
          "Password: " + password;
      }
    } catch (error) {
      console.error("Error while fetching Person", error);
    }
  }

  //nearly identical to code from Feature 3 - creates some text input fields and allows function to write to paragraph tags with certain p id's
  return (
    <div>
      <h3>Not from around here, eh?</h3>
      <p>No problem, we've got you covered.</p>
      <div className="NameBox">
        <input type="text" placeholder="Enter your name..." id="newName" />
      </div>
      <div className="EmailBox">
        <input type="text" placeholder="Enter your email..." id="newEmail" />
      </div>
      <div className="PasswordBox">
        <input type="text" placeholder="Enter your password" id="newPassword" />
      </div>
      <br />
      <button onClick={addProfile}>Add Profile</button>
      <p id="p1"></p>
      <p id="p2"></p>
      <p id="p3"></p>
      <hr></hr>

      <h3>
        Forgot your password? Use this ridiculously unsecure field to retrieve
        it!
      </h3>
      <p>Enter your name here</p>
      <div className="ReadNameBox">
        <input type="text" placeholder="Enter your name..." id="ReadName" />
      </div>
      <button onClick={read}>Tell Me My Password</button>
      <div className="Fields">
        <p id="Pname"></p>
        <p id="Pemail"></p>
        <p id="Ppassword"></p>
      </div>
    </div>
  );
};
