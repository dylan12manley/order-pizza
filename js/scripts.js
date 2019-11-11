//Buisness Interface//
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  if (this.size === "XL"){
    this.price += 24;
  } else if (this.size === "Large"){
    this.price += 20;
  } else if (this.size === "Medium"){
    this.price += 15;
  } else if (this.size === "Small"){
    this.price += 12;
  }
  this.toppings.forEach(function(toppings) {
    this.price += 2;
  });
  return this.price
}
 // User Interface//
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $(".toppingInput:checked").get();
    console.log(toppingsInputs);
    let toppingsArray = [];
    let sizeInput = $("select#sizes").val();
    console.log(sizeInput);
    toppingsInputs.forEach(function(topping) {
      toppingsArray.push(topping.value);
    });
    let myPizza = new Pizza(sizeInput, toppingsArray, 0)
    let price = myPizza.getPrice();
    $('#pizzaResults').fadeOut(function() {
      $(this).text("You have ordered one "+myPizza.size+" with "+toppingsArray+" for the price of $"+price).fadeIn();
    });
  });
});
