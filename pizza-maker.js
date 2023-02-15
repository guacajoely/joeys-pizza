
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
  
  //   Goals of the pizza project:
  //   ---------------------------
  //   1. Function for adding 2 toppings to the pizza
  
  let toppingOne = 'pepperoni'
  let toppingTwo =  'sausage'
  
  const addToppings = (top1, top2) => {
    currentPizza.topping1 = top1;
    currentPizza.topping2 = top2;
  }
  
  addToppings(toppingOne,toppingTwo)
      
  //     2. Function that adds `size` property to pizza
  //    (ALSO ADDS baked, paid, and outForDelivery keys as false)
  
  let pizzaSize = 12
  
  const addSize = (size) => {
    currentPizza.size = size;
    currentPizza.baked = false;
    currentPizza.paid = false;
    currentPizza.outForDelivery = false;
  }
  
  addSize(pizzaSize)
  
  //     3. Function that bakes the pizza
  
  const bakePizza = () => currentPizza.baked = true;
  
  //     4. Function to mark the pizza as being paid
  
  const pay4Pizza = () => currentPizza.paid = true;
  
  //     5. Function that logs a "Your {pizza details} is being delivered".
  //           If pizza is not paid for yet, display "Please pay us first"
  
  const deliverPizza = () => {
    if(currentPizza.paid){
      currentPizza.outForDelivery = true;
      console.log(`Your ${currentPizza.size} inch pizza with ${currentPizza.topping1} and ${currentPizza.topping2} is being delivered!`)
    }
    
    else{
      console.log('Please pay for your pizza to have it delivered')
    } 
  }
  
  deliverPizza()
  
  
  //     6. Each function copies the input object and returns
  //           modified copy
  
    
  console.log(currentPizza)
  
  