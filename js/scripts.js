function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function(){
  this.toppings.forEach(function(toppings){
    this.price += 2;
  });
  if (this.size === extraLarge){
    this.price += 24;
  } else if (this.size === large){
    this.price += 20;
  } else if (this.size === medium){
    this.price += 15;
  } else if (this.size === small){
    this.price += 12;
  }
  return this.price
}

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $(".toppingInput:checked")
    console.log(toppingsInputs);
    let toppingsArray = [];
    console.log(toppingsArray);
    let sizeInput = $("#sizes").val();
    toppingsInputs.forEach(function(element) {
      console.log(element);
    });


    toppingsInputs.forEach(function(toppingInput) {
      toppingsArray.push(toppingInput.val());
    });
    console.log(toppingsArray);
    let myPizza = new Pizza(sizeInput, toppingsArray)
    let price = myPizza.getPrice();
  });
});
