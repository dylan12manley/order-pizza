function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Sub.prototype.getPrice = function(){
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
  $("#submit").submit(function(event) {
    event.preventDefault();
    let toppingsInputs = $("#toppings : checked")
  });
});
