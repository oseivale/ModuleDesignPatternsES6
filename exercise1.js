// Practicing module design patterns with ES6

/* Modules allow you to break up different 
pieces of your code to make it easier to maintian and reason about 
parts of the code, are also protected from access by other properties and functions
*/

//Before JS ES6 --> modules looked like this:

(function () {

		// declare private variables and/or functions

	return {
		// declare public variables and/or functions
	}
})(); // otherwise known as a closure that returns and object, and is immediately invoked


// After ES6

/* lib/module.js */

class ShoppingDataType {
	constructor(){
		//private properties
		this.shoppingList = ['coffee', 'chicken', 'pizza']
	}

	// public methods
	getShoppingList() {
		return this.shoppingList.join(", ")
	}

	addItem(item) {
		this.shoppingList.push(item)
	}
}

export default ShoppingDataType;

//in main.js, we are going to:

import ShoppingDataType from 'libs/module';