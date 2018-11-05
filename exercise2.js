// closures in js allow variables and functions to exist inside of a scoped module

/* things are contained within js object and the js object exposes public parts
of that object */

/* in order to be call-able, the module must be invoked 

Example of an IIFE that contains a private object that is then
made public

once that object is returned and made public, it can call a method
and it can also have a function assigned to it --> this function
is private as it can only be accessed within the IIFE

but once the function/closure calls another function inside of it, 
that function become public, if it has been made public by the return
statement in the IIFE

When an object is made public, it can then call other functions and make them
public as well, allowing for modules to communicate with other modules 

publically accessible methods can call private functions if you want them to
you can make public what you choose to maje public and keep private
what you choose to keep private */

var test = function () {

	var example = {};

	function sample () {
		alert("your mom"); // private function or closure
	};

	example.alert = function(){
		sample(); //making the sample function public, as it is contained within a publically accessible method
	}

	return example;
}();


