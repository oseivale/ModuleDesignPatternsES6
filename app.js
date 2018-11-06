

var bookController = (function(){

	var Book = function(id, title, author){
		this.id = id;
		this.title = title;
		this.author = author;
	};


	var data = {
		allItems: {
			books: []
		}

	
	};

	return {
		addItem: function(title, author){
			var newItem, ID;

			newItem = new Book(ID, title, author);

			if (data.allItems[title].length > 0){
				ID = data.allItems[title][data.allItems[title].length - 1].id + 1;
			} else {
				ID = 0;
			}

		data.allItems[type].push(newItem);

		}
	}

})();

var UIController = (function(){

	var DOMstrings = {
		inputTitle: '.book-title',
		inputAuthor: '.book-author',
		inputBtn: '.add-listing',
		bookContainer: '.book-list'
	};

		return {

			getInput: function(){
				return {
					title: document.querySelector(DOMstrings.inputTitle),
					author: document.querySelector(DOMstrings.inputAuthor)
				}

			},

			addListItem: function(obj, type) {
 			var html, newHTML, element;
 			// Create HTML string with some placeholder text
 			
 			element = DOMstrings.bookContainer;
 			html = '<div class="book-title">%book%</div><div class="book-author">%author%</div>';
 			// Replace the placeholder text with some data
 			newHTML = html.replace('%book%', 'hello');
 			newHTML = newHTML.replace('%author%', 'hello');
 			

 			// Insert the HTML into the DOM
 			document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
 		},

				getDOMstrings: function(){
	 			return DOMstrings;
	 		}
	 	};
	

})();

var appController = (function(bookCtrl, UICtrl){



		 	var setupEventListeners = function(){

	 		var DOM = UICtrl.getDOMstrings();

	 		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

	 		document.addEventListener('keypress', function(event){

		 		if (event.keyCode === 13 || event.which === 13){
		 			ctrlAddItem();
		 			console.log('Hello World');
		 		}
	 	});


 	}

 	
 	var ctrlAddItem = function(){
 		
 		console.log('Hello Everyone');
 		var input, newItem;

 		// 1. Get the field input data
 		input = UICtrl.getInput();
 		// 2. Add the item to the budget controller
 		newItem = bookCtrl.addItem(input.title, input.author);

 		// 3. Add the new item to the UI
 		UICtrl.addListItem(newItem, input.title);
 		// 4. Calculate the budget
 		// 5. Display the budget on the UI
 	};

 	return {
 		init: function() {
 			console.log('Application has started.');
 			setupEventListeners();
 		}
 	};

})(bookController, UIController);

appController.init();

 


