//Buisness Interface//
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  this.price = ((this.toppings.length)*2)
  if (this.size === "XL"){
    this.price += 24;
  } else if (this.size === "Large"){
    this.price += 20;
  } else if (this.size === "Medium"){
    this.price += 15;
  } else if (this.size === "Small"){
    this.price += 12;
  }
  return this.price
}
 // User Interface//
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $(".toppingInput:checked").get();
    let toppingsArray = [];
    let sizeInput = $("select#sizes").val();
    toppingsInputs.forEach(function(topping) {
      toppingsArray.push(topping.value);
    });
    let myPizza = new Pizza(sizeInput, toppingsArray, 0);
    myPizza.getPrice();
    $('#pizzaResults').fadeOut(function() {
      $(this).text("You have ordered one "+myPizza.size+" pizza with "+myPizza.toppings+" for the price of $"+myPizza.price).fadeIn();
    });
  });
});
