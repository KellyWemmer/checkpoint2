let cheese = 0

let clickUpgrades = {
    pickaxes: {
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    carts: {
        price: 3,
        quantity: 0,
        multiplier: 2
      }
  };
  
  let automaticUpgrades = {
    rovers: {
      price: 3,
      quantity: 0,
      multiplier: 1
    },
    miner: {
        price: 2,
        quantity: 0,
        multiplier: 2
      }
  };

function mine() {
    cheese += 1
    window.alert(cheese)
    update()
}

function update() {
    let template = `
                <div class="card-header">
                  Cheese
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Total:${cheese}</li>
                  <li class="list-group-item">Amount Per Click</li>
                </ul>
    `
    
    //console.log(template) prints template to console with updated cheese number
    let cheeseElm = document.getElementById('cheese-count')
    cheeseElm.innerHTML = template
}

function buyPickAxe() {
    let purchase = clickUpgrades['pickaxes']
    console.log('axe', purchase)
        if (purchase.price <= cheese) {
            
        }
}
