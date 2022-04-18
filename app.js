/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Pavneet Kaur
 *      Student ID: 128287216
 *      Date:       26 March, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

var menu = document.getElementById("menu");
window.onload = function () {
  categories.forEach((category) => {
    var button = document.createElement("button");
    button.onclick = function () {
      DisplayProduct(category);
    };
    button.innerHTML = category.name;
    menu.appendChild(button);
  });
  DisplayProduct(categories[0]);
};

var Category = document.getElementById("selected-category");
var body = document.getElementById("category-products");

function DisplayProduct(category) {
  Category.innerHTML = category.name;
  body.innerHTML = "";
  var filter_prod = products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );
  var i = 0;
  for (i = 0; i < filter_prod.length; i++) {
    var row = document.createElement("tr");

    // creating a <td> element and put them at the end of the table row

    row.appendChild(getTdElement(filter_prod[i].title));
    row.appendChild(getTdDescription(filter_prod[i].description));
    row.appendChild(getTdPrice(filter_prod[i].price));

    // adding the row to the end of the table body
    body.appendChild(row);
  }

  function getTdElement(text) {
    var cell = document.createElement("td");
    cell.innerHTML = text;
    return cell;
  }

  // creating a <td> element and a text
  function getTdDescription(text) {
    var cell = document.createElement("td");
    cell.innerHTML = `item ${i + 1} Description.....`;
    cell.onclick = function () {
      cell.innerHTML = text;
    };

    return cell;
  }
  function getTdPrice(price) {
    var cell = document.createElement("td");
    var newPrice = price / 100;
    cell.innerHTML = `$ ${newPrice}`;
    return cell;
  }
}
