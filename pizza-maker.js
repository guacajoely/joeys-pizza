
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

  <div id="pizza-status">Please make sure the customer has paid for their pizza before it is made or delivered</div>

  <a href="#" id="pay-4-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Pay 4 Pizza
</a>

<a href="#" id="bake-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Bake Pizza
</a>

<a href="#" id="deliver-pizza">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Deliver Pizza
</a>

  `


  })

allLinks = document.querySelectorAll('a')

allLinks.addEventListener("click", addListenersToNewButtons())

function addListenersToNewButtons(){
//variables for new elements in HTML
const payBtn = document.getElementById("pay-4-pizza")
const bakeBtn = document.getElementById("bake-pizza")
const deliverBtn = document.getElementById("deliver-pizza")

// event listeners for new elements in html
payBtn.addEventListener("click", pay4Pizza())
bakeBtn.addEventListener("click", pay4Pizza())
deliverBtn.addEventListener("click", pay4Pizza())

}

// 4. Function to mark the pizza as being paid
  
const pay4Pizza = () => {
  currentPizza.paid = true;
  const statusMsg = document.getElementById("pizza-status")
  statusMsg.textContent = "The customer has paid for their pizza. Please prepare it for baking!"
  console.log("The customer has paid for their pizza. Please prepare it for baking!")
  console.log(currentPizza)
}


// 5. Function that bakes the pizza
  
const bakePizza = () => {
  if(currentPizza.paid){
  currentPizza.baked = true;
  const statusMsg = document.getElementById("pizza-status")
  statusMsg.textContent = "The customer's pizza has been made and is ready for delivery!"
  console.log("The customer's pizza has been made and is ready for delivery!")
  console.log(currentPizza)
  }
}


// 6. Function that logs a "Your {pizza details} is being delivered".
// If pizza is not paid for yet, display "Please pay us first"
  
const deliverPizza = () => {
  if(currentPizza.paid){
    currentPizza.outForDelivery = true;
    const statusMsg = document.getElementById("pizza-status")
    statusMsg.textContent = `The customer's ${currentPizza.size} inch pizza with ${currentPizza.topping1} and ${currentPizza.topping2} is out for delivery!`
    console.log(`The customer's ${currentPizza.size} inch pizza with ${currentPizza.topping1} and ${currentPizza.topping2} is out for delivery!`)
    console.log(currentPizza)}
  
}




  
  