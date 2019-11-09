//Buisness Interface//
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  console.log(this.size);
  if (this.size === "XL"){
    this.price += 24;
  } else if (this.size === "Large"){
    this.price += 20;
  } else if (this.size === "Medium"){
    this.price += 15;
  } else if (this.size === "Small"){
    this.price += 12;
  }
  this.toppings.forEach(function(toppings){
    this.price += 2;
    console.log(this.price);
  });
  return this.price
}
 // User Interface//
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $(".toppingInput:checked").get();
    let toppingsArray = [];
    let sizeInput = $("#size").value;
    console.log(sizeInput);
    toppingsInputs.forEach(function(topping) {
      toppingsArray.push(topping.value);
    });
    let myPizza = new Pizza(sizeInput, toppingsArray)
    let price = myPizza.getPrice();
    console.log(myPizza.toppings);
    $('#pizzaResults').fadeOut(function() {
      $(this).text("You have ordered one "+myPizza.size+" with "+toppingsArray+" for the price of $"+price).fadeIn();
    });
  });
});
