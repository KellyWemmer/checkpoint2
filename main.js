let cheese = 0

let clickAmount = 1
let clickUpgrade = 0
let intUpgrade = 0

let clickUpgrades = {
  pickaxes: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  carts: {
      price: 150,
      quantity: 0,
      multiplier: 2
    }
};
  
let automaticUpgrades = {
  miners: {
    price: 300,
    quantity: 0,
    multiplier: 8
  },
  rovers: {
    price: 500,
    quantity: 0,
    multiplier: 15
  }  
};

function updateCheese() {// updates cheese counts
  let template = `
    <div class="card-header">
    <h5><strong>Cheese</strong></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Total Cheese Mined: ${cheese}</li>
      <li class="list-group-item">Amount Per Click: ${clickAmount + clickUpgrade}</li>
      <li class="list-group-item">Amount Per Auto Upgrade: ${intUpgrade}</li>
    </ul>
  `
  
  //console.log(template) prints template to console with updated cheese number
  let cheeseElm = document.getElementById('cheese-count')
  cheeseElm.innerHTML = template
}
updateCheese()

function drawInventory() {//draws current updates to purchases
  let pickaxe = clickUpgrades['pickaxes']
  let cart = clickUpgrades['carts']
  let rover = automaticUpgrades['rovers']
  let miner = automaticUpgrades['miners']
  let template = ''
  template += `
  <div class="card-header">
      <h5><strong>Inventory</strong></h5> 
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Pickaxes: ${pickaxe.quantity}</li>
      <li class="list-group-item">Cart: ${cart.quantity}</li>
      <li class="list-group-item">Miner: ${miner.quantity}</li>
      <li class="list-group-item">Rover: ${rover.quantity}</li>
  </ul>
`
  //console.log(template) logged successful
  pickAxeElm = document.getElementById('inventory')
  pickAxeElm.innerHTML = template
}
drawInventory()

function mine() {//adds total number of cheese mined from all sources
  cheese += clickUpgrade + clickAmount //do not want to add auto upgrades here, just click amounts
  //window.alert(cheese)
  updateCheese()
}
updatePickaxCard()
updateCartCard()
updateMinerCard()
updateRoverCard()

function buyPickAxe() {
  let purchased = clickUpgrades['pickaxes']
  //console.log('axe', purchased)  //logged successfully
  if (purchased.price <= cheese) {  //check if user has resources to purchase
      purchased.quantity +=1  //increased purchase quantity by 1
      cheese -= purchased.price //decrease cheese stock by purchase price
      purchased.price += purchased.price //doubles purchase price with each purchase
      //console.log(purchased) //logged successfully
      //console.log(cheese) //logged successfully            
    }
    clickModifier()
    updateCheese()  
    drawInventory()
    updatePickaxCard()
}

function buyCart() {
  let purchased = clickUpgrades['carts']
  // console.log('cart', purchased) //logged successfully 
  if (purchased.price <= cheese) {  
    purchased.quantity +=1  
    cheese -= purchased.price
    purchased.price += purchased.price
      // console.log("Purchased", purchased) //logged successfully
    // console.log("cheese", cheese)  //logged successfully      
  }
  clickModifier()
  updateCheese()  
  drawInventory()
  updateCartCard()
}

function buyMiner () {
  let purchased = automaticUpgrades['miners']
  if (purchased.price <= cheese) {
    purchased.quantity += 1
    cheese -= purchased.price
    purchased.price += purchased.price
  }
  collectAutoUpgrades()
  updateCheese()
  drawInventory()
  updateMinerCard()
}

function buyRover () {
  let purchased = automaticUpgrades['rovers']
  if (purchased.price <= cheese) {
    purchased.quantity += 1
    cheese -= purchased.price
    purchased.price += purchased.price
   }
  collectAutoUpgrades()
  updateCheese()
  drawInventory()
  updateRoverCard()
}

function clickModifier() { 
  clickUpgrade = 0 //set balance back to zero to calculate new click upgrade
  for (let key in clickUpgrades) {
    let tool = clickUpgrades[key]    
    clickUpgrade += tool.multiplier * tool.quantity //calculates click upgrade based on multiplier * quantity  
  }
}

function collectAutoUpgrades() {
  intUpgrade = 0 //set original balance to zero
  for(let key in automaticUpgrades) {
    let tool = automaticUpgrades[key]
    intUpgrade += tool.multiplier * tool.quantity //calculates click upgrade based on multiplier
  }
  cheese += intUpgrade //updates cheese by calculated upgrade
  console.log(intUpgrade)
  updateCheese()
}

function updatePickaxCard() {
  let purchased = clickUpgrades['pickaxes']

  let template = ''

  template += `
  <p class="card-text">Pickax Price: ${purchased.price}</p>
  `
  console.log(template)
  let pickaxElm = document.getElementById('pickax')
  pickaxElm.innerHTML = template
}

function updateCartCard() {
  let purchased = clickUpgrades['carts']

  let template = ''

  template += `
  <p class="card-text">Cart Price: ${purchased.price}</p>
  `
  let cartElm = document.getElementById('cart')
  cartElm.innerHTML = template
}

function updateMinerCard() {
  let purchased = automaticUpgrades['miners']

  let template = ''

  template += `
  <p class="card-text">Miner Price: ${purchased.price}</p>
  `
  let minerElm = document.getElementById('miner')
  minerElm.innerHTML = template
}

function updateRoverCard() {
  let purchased = automaticUpgrades['rovers']

  let template = ''

  template += `
  <p class="card-text">Rover Price: ${purchased.price}</p>
  `
  let roverElm = document.getElementById('rover')
  roverElm.innerHTML = template
}


setInterval(collectAutoUpgrades, 3000);
