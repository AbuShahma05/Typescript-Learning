"use strict";
let laptop = {
  name: "Laptop",
  price: 999,
  description: "A powerful laptop",
};
let mouse = {
  name: "Mouse",
  price: 25,
  // No description - that's OK because it's optional
};
function displayProduct(product) {
  console.log("Product:", product.name);
  console.log("Price: $" + product.price);
  if (product.description) {
    console.log("Description:", product.description);
  }
  console.log("---");
}
displayProduct(laptop);
displayProduct(mouse);
