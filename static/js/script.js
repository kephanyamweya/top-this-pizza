// $(document).ready(function(){
//   $('.header').height($(window).height());
// })

let del = 100;
let PizzatotalPrice = [];
function Order (pizzaSize, crust) {
 this.pizzaSize = pizzaSize;
 this.crust = crust;
 this.Topping1 = 200;
 this.Topping2 = 230;
 this.pizzaPrice = 0;
 this.pizzaNumber  = 1;
 this.pizzaNumbers = [];
}
Order.prototype.pizzaCost = function () {
 if (this.pizzaSize === "Small") {
   this.pizzaPrice += 300;
 } else if (this.pizzaSize === "Medium") {
   this.pizzaPrice += 500;
 } else if (this.pizzaSize === "Large") {
   this.pizzaPrice += 700;
 }
 if (this.crust === "crispy") {
   this.pizzaPrice += 600;
 } else if (this.crust === "stuffed") {
   this.pizzaPrice += 800;
 } else if (this.crust === "glutenFree") {
   this.pizzaPrice += 1000;
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
 let TotalPrice = 0;
 for (let i = 0; i < PizzatotalPrice.length; i ++) {
   TotalPrice += PizzatotalPrice[i];
 }
 return TotalPrice;
}

$(document).ready(function() { 
  $(".header").height($(window).height());

  $("#orders").click(function(){
    $("#order").show(1000)
  });

 $("form#pizzaOrder").submit(function(event) {
     event.preventDefault();
   let pizzaSize = $("select#size").val();
   let crust = $("select#crust").val();
   let Topping1 = $("select#Topping1").val();
   let Topping2 = $("select#Topping2").val();
   let pizzaNumbers = $("input#pizza-number").val();
   let pizzaDetails = (pizzaNumbers + ", " + pizzaSize + ", " + crust + ", " + Topping1 + ", " + Topping2);
   let newPizzaOrder = new Order(pizzaSize, crust);
   newPizzaOrder.pizzaCost();
   PizzatotalPrice.push(newPizzaOrder.pizzaPrice);


   $("#pizzaDetails").show();
   $("#totalPizzaCost").text(newPizzaOrder.finalCost());
   $("#pizzaDetail").append("<p>" + pizzaDetails + "</p>");
   $("#size, #crust, #Topping1, #Topping2, #pizza-number").val("");
 });
 $("#pizzaDetails").click(function() {
   $("#pizzaDetail").toggle();
   $("#deliver").toggle();
   $("#pickup").toggle();
   $("#checkout").hide();
 });
$("button#deliver").click(function(event){
   event.preventDefault();
   alert("Delivery cost is" + " " + del);
   let location = prompt("Enter your address:");
   alert("We will deliver your order at" + " " + location);
   $("#checkout").show();
})
$("button#pickup").click(function(event){
   event.preventDefault();
   alert("Thank you for shopping with us!!!!!");
   $("#checkout").show();
})
$("button#checkout").click(function(event){
   event.preventDefault();
   let check = TotalPrice + del;
   $("#check").text(check);
   // console.log(check);
});
})