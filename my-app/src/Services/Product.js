import React from "react";
import Parse from "parse";

export const ProductComponent = () => {
  // State variables

  //very similar function to the add function found in Profile.js, Personcomponent.js, as we needed several similar setters.
  async function addProduct() {
    try {
      // create a new Parse Object instance
      var inputVal1 = document.getElementById("newProductName").value;
      document.getElementById("p1").innerHTML = inputVal1;
      var inputVal2 = document.getElementById("newProductPrice").value;
      document.getElementById("p2").innerHTML = inputVal2;
      var inputVal3 = document.getElementById("newDescription").value;
      document.getElementById("p3").innerHTML = inputVal3;
      var inputVal4 = document.getElementById("newSold").value;
      document.getElementById("p4").innerHTML = inputVal4;
      const Product = new Parse.Object("Product");
      // define the attributes you want for your Object
      Product.set("product", inputVal1);
      Product.set("price", inputVal2);
      Product.set("description", inputVal3);
      Product.set("sold", inputVal4);
      Product.set("index", "1");
      // save it on Back4App Data Store
      await Product.save();
      alert("Product saved!");
    } catch (error) {
      console.log("Error saving new product: ", error);
    }
  }

  //returns functional output to the user through the use of .innerHTML
  return (
    <div>
      <hr></hr>
      <h3>Tell Us More About the Product</h3>
      <div className="ProductNameBox">
        <input
          type="text"
          placeholder="Enter product name..."
          id="newProductName"
        />
      </div>
      <div className="ProductPriceBox">
        <input
          type="text"
          placeholder="Enter asking price..."
          id="newProductPrice"
        />
      </div>
      <div className="DescriptionBox">
        <input
          type="text"
          placeholder="Enter product description..."
          id="newDescription"
        />
      </div>
      <div className="SoldBox">
        <input
          type="text"
          placeholder="Post this listing now? (y/n)"
          id="newSold"
        />
      </div>
      <br />
      <button onClick={addProduct}>Add Product</button>
      <p id="p1"></p>
      <p id="p2"></p>
      <p id="p3"></p>
      <p id="p4"></p>
      <hr></hr>
    </div>
  );
};
