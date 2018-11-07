var test = (function(){

	var love = {
		a: 2,
		b: 3,
		c: 5
	}


	function add(){
		console.log(love.b)
	}

	function subtract(){
		console.log(love.c * love.a)
	}


return {
	smile: function(){
		console.log('hello world');
	}, 
	sing: function(){
		console.log(love.c)
	},
	laugh: function(){
		add();
	},
	happy: function(){
		subtract();
	}

}



})();



var test2 = (function(mod, mod2){

	var cat = mod.smile()
	var dog = mod.sing()
	var sheep = mod.laugh()



	

})(test);


var test3 = (function(mod1, mod2){
	var hello, hey, hi;

	hello = mod1.sing()
	hey = mod1.happy()


})(test, test2);




