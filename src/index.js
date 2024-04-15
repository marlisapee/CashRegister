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
    let count = 0;
    for(let i = drawer.length - 1; i >= 0; i--){
        let obj = drawer[i]
        let product = obj.value * obj.quantity

        if(product <= target){
            count += (target - product)
        } else {
            const maxQuantityNeeded = Math.floor(target / obj.value)
            count += maxQuantityNeeded * obj.value
        }

        if(count === target)
            return true
    }

    return false
}


console.log(canMakeAmount(2500,drawer));

// **** LEVEL 5 **** // 
/**
- transaction(cost, paid, drawer): Calculates the changeNeeded required from a transaction and removes it from the drawer if possible.

transaction works out the amount of changeNeeded the customer is owed based on the cost of their items and the amount they have paid. The function
- Adds the customer’s paid amount to the drawer
- Removes their changeNeeded from the drawer
- Returns the new drawer.
A few structural factors to consider as you create your transaction function:
- Parameters: Accepts the cost of the customers basket, the paid amount that was handed to the cashier, and a drawer of currency.
- Returns the drawer after the transaction has taken place.
- You should assume that the paid amount and the changeNeeded are given in the largest denominations available
For example, 2.25 should be a 2 dollar bills and 1 quarter, if they are available, rather than 2 dollar bills and 5 nickels. However, if no quarters and dimes are available you should then use nickels.
 */
                    // 75  100 -> subtract 25 from drawer w largest denoms
const transaction = (cost, paid, drawer) => {
    let changeNeeded = paid - cost;


        
    //     // loop through drawer starting at largest denom
    //     for(let i = drawer.length - 1; i >= 0; i++){
    //         let obj = drawer[i]
    //         let product = obj.value * obj.quantity

    //         if(changeNeeded >= product){
    //             // push denom object to change given
    //             changeGiven.push(obj)
    //             // remove from drawer
    //             for(let i = 1; i <= obj.quantity; i++){
    //                 removeItem(obj.name, drawer)
    //             }

    //             changeNeeded -= product;
    //         }
    //     }
    
    return drawer;
    
}

console.log(transaction(345,350,drawer));