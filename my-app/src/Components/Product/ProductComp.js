import React from "react";
import { ProductComponent } from "../../Services/Product.js";

//This uses ProductComponent, giving it a header to introduce the page
export const ProductComp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Product</h2>
        <ProductComponent />
      </header>
    </div>
  );
};

export default ProductComp;
