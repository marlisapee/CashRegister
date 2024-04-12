const drawer = require('./drawer')

// **** LEVEL 1 **** // 
/**
- removeItem(name, drawer): Removes a single item from the drawer
- addItem(name, drawer): Adds a single item to the drawer
 */

const removeItem = (name, drawer) => {
    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i]
        if(obj.name === name) {
            obj['quantity']--
        }
    }
    return drawer
}


// console.log(drawer);
// console.log(removeItem('nickel', drawer));

const addItem = (name, drawer) => {
    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i]
        if(obj.name === name) {
            obj['quantity']++
        }
    }
    return drawer
}

// console.log(addItem('penny', drawer));


// **** LEVEL 2 **** // 
/**
- countCoins(drawer): Counts how many coins are in the drawer
- countNotes(drawer): Counts how many notes/bills are in the drawer
 */

const countCoins = (drawer) => {
    const coins = ['penny', 'nickel', 'dime', 'quarter']
    let count = 0;

    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i]
        if(coins.includes(obj.name)){
            count += obj.quantity
        }
    }
    return count
}

console.log('COIN COUNT: ',countCoins(drawer));

const countNotes = (drawer) => {
    const notes = ['one', 'five', 'ten', 'twenty', 'hundred']
    let count = 0;

    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i]
        if(notes.includes(obj.name)){
            count += obj.quantity
        }
    }
    return count

}

console.log('NOTE COUNT: ',countNotes(drawer));

// **** LEVEL 3 **** // 
/**
- sumDrawer(drawer): Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
 */

const sumDrawer = (drawer) => {
    let originalCount = 0;
    
    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i]
        let product = obj.value * obj.quantity
        originalCount += product
    }

    const count = originalCount / 100
    let formattedCount = count.toLocaleString('en-US', {style: 'currency', currency: "USD"});

    return formattedCount
}

console.log(sumDrawer(drawer));

// **** LEVEL 4 **** // 
/**
- canMakeAmount(target, drawer): Determines whether it is possible to create a specific cash amount from the items in the drawer.
 */

const canMakeAmount = (target, drawer) => {
    
}






// **** LEVEL 5 **** // 
/**
- transaction(cost, paid, drawer): Calculates the change required from a transaction and removes it from the drawer if possible.
 */




