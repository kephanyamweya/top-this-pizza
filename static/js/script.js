// $(document).ready(function(){
//  $(".header").height($(window).height());
// })

let del = 350;
let pizzaTotalPrice = [];
function order (pizzaSize, crust) {
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.Topping1 = 400;
    this.Topping2 = 600;
    this.pizzaPrice = 0;
    this.pizzaNumber = 1;
    this.pizzaNumbers = [];
}
order.prototype.pizzaCost = function () {
    if (this.pizzaSize === "small") {
      this.pizzaPrice += 1000;
    } else if (this.pizzaSize === "medium") {
        this.pizzaPrice += 2000;
    } else if (this.pizzaSize === "large") {
        this.pizzaPrice += 3000;
    }
    if (this.crust === "crispy") {
        this.pizzaPrice += 800;
      } else if (this.crust === "stuffed") {
        this.pizzaPrice += 1200;
      } else if (this.crust === "glutenFree") {
        this.pizzaPrice += 1500;
      }
      for(let j = 1; j < this.pizzaNumbers.length; j++){
        pizzaNumber += pizzaNumbers[j];
          }
      this.pizzaPrice += this.Topping1;
      this.pizzaPrice += this.Topping2;
      this.pizzaPrice *= this.pizzaNumber;
      //this.pizzaPrice *= this.pizzaNumbers;
      return this.pizzaPrice;
     }
     Order.prototype.finalCost = function () {
      var TotalPrice = 0;
      for (var i = 0; i < PizzatotalPrice.length; i ++) {
        TotalPrice += PizzatotalPrice[i];
      }
      return TotalPrice;   
}

