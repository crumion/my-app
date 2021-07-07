import Parse from "parse";

export const Feed = () => {
  // State variables

  // asynchronous read function, queries to pull in every entry in the product class and display all of them at once. TODO in future version: make this the home page, make it display without having to hit the Read button
  async function read() {
    const query = new Parse.Query("Product");
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const product = object.get("product");
        const price = object.get("price");
        const description = object.get("description");
        const sold = object.get("sold");
        console.log(product);
        document.getElementById("All").innerHTML +=
          "<p> Product: " +
          product +
          "</p><p> Description: " +
          description +
          "</p><p> Price: $" +
          price +
          "</p><p> Sold (y/n): " +
          sold +
          "</p><br/>";
      }
    } catch (error) {
      console.error("Error while fetching Person", error);
    }
  }

  return (
    <div>
      <button onClick={read}>Read</button>
      <div className="Fields">
        <p id="All"></p>
      </div>
    </div>
  );
};
