function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  this.toppings.forEach(function(toppings){
    this.price += 2;
    console.log(this.price);
  });
  if (this.size === "Extra Large"){
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

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $(".toppingInput:checked").get();
    let toppingsArray = [];
    let sizeInput = $(".sizes").val();
    toppingsInputs.forEach(function(topping) {
      toppingsArray.push(topping.value);
    });
    let myPizza = new Pizza(sizeInput, toppingsArray)
  console.log(myPizza);
    let price = myPizza.getPrice();

    console.log(price);
    $('#pizzaResults').text(myPizza.size + toppingsArray + price);
    $('#pizzaResults').text(myPizza.size + toppingsArray + price);
    $('#pizzaResults').fadeOut(function() {
      $(this).text("You have ordered one "+myPizza.size+" with "+toppingsArray+" for the price of $"+price).fadeIn();
    // $('#pizaResult').fadeOut(function() {
    //   $(this).text(toppingsArray).fadeIn();
    // $('#pizaResult').fadeOut(function() {
    //   $(this).text(price).fadeIn();
    });
  });
});
