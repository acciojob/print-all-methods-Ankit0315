//your JS code here. If required.
function allMethods() {
  //write your code here
	return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
}

 alert(allMethods());
	
