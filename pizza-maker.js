
//   The owners of Joey's Pizza want your team to develop some software
//   that allows employees to build customer pizzas with 2 toppings, at the
//   right size, get it paid for, bake it, and then output a message that
//   it is being delivered.

//   The delivery message should only happen if the pizza has been paid for.


//COMPLETED PIZZA OBJECT PROTOTYPE


const examplePizza = {
    topping1: 'pepperoni',
    topping2: 'sausage',
    size: 16,
    baked: false,
    paid: false,
    outForDelivery: false
  }
  
// start with a blank pizza
let currentPizza = {}


// 1. Function for adding 2 toppings to the pizza

const addToppings = (top1, top2) => {
    currentPizza.topping1 = top1;
    currentPizza.topping2 = top2;
  }
  

// 2. Function that adds `size` property to pizza
// (ALSO ADDS baked, paid, and outForDelivery keys as false)
  
  const addSize = (size) => {
    currentPizza.size = size;
    currentPizza.baked = false;
    currentPizza.paid = false;
    currentPizza.outForDelivery = false;
  }
  

// 3. input toppings and pizza size from inputs on pizza-maker.html 
//    when "Make Pizza" button is pressed (also transforms HTML into "Pizza Completer")

  const submitBtn = document.getElementById("submit-pizza")
  const topping1Input = document.getElementById("topping-one")
  const topping2Input = document.getElementById("topping-two")
  const sizeInput = document.getElementById("size")

  let toppingOne
  let toppingTwo 
  let pizzaSize 
  
  submitBtn.addEventListener("click", function(){
   
  toppingOne = topping1Input.value
  toppingTwo = topping2Input.value
  pizzaSize = parseFloat(sizeInput.value)

  addToppings(toppingOne,toppingTwo)
  addSize(pizzaSize)

  console.log(currentPizza)

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // This completely changes the HTML structure of the form to be 3 buttons
  // An EXAMPLE of this html layout is apart of this folder saved as EXAMPLE.html for reference

  const rewriteHTML = document.querySelector('form')
  rewriteHTML.innerHTML = `

  <div id="pizza-build">The customer has ordered a <strong>${currentPizza.size}</strong> inch pizza with <strong>${currentPizza.topping1}</strong> and <strong>${currentPizza.topping2}</strong></div>
  <div id="pizza-status">Please make sure the customer has paid for their pizza before it is made or delivered!</div>

  <a onclick="pay4Pizza()" href="#" id="pay-4-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Pay 4 Pizza
</a>

<a onclick="bakePizza()" href="#" id="bake-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Bake Pizza
</a>

<a onclick="deliverPizza()" href="#" id="deliver-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Deliver Pizza
</a>

<a href="index.html" id="make-new-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Make New Pizza
</a>


  `


})


// 4. Function to mark the pizza as being paid
  
const pay4Pizza = () => {

//disable clicking previous buttons 
  if(currentPizza.baked || currentPizza.outForDelivery){
    return
  }

  currentPizza.paid = true;
  const statusMsg = document.getElementById("pizza-status")
  statusMsg.textContent = "The customer has paid for their pizza. Please prepare it for baking!"
  console.log(currentPizza)
}



// 5. Function that bakes the pizza


  
const bakePizza = () => {

//disable clicking previous buttons 
  if(currentPizza.outForDelivery){
    return
  }

  if(currentPizza.paid){
  currentPizza.baked = true;
  const statusMsg = document.getElementById("pizza-status")
  statusMsg.textContent = "The customer's pizza his done and ready for delivery!"
  console.log(currentPizza)
  }
}


// 6. Function that logs a "Your {pizza details} is being delivered".
// If pizza is not paid for yet, display "Please pay us first"
  
const deliverPizza = () => {
  if(currentPizza.paid){
    currentPizza.outForDelivery = true;
    const statusMsg = document.getElementById("pizza-status")
    statusMsg.textContent = `The customer's pizza is out for delivery!`
    console.log(currentPizza)}
  
}




  
  