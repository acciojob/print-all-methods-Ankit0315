//your JS code here. If required.
function allMethods() {
  //write your code here
	const allMethods = () => { return Object.getOwnPropertyNames(Math).filter(function (property)
	{ return typeof Math[property] == "function";
	}); 
};

 alert(allMethods());
}
	
