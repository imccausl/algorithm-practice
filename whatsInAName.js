
function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line
	var srcKeys = Object.keys(source);
	
	arr = collection.filter(function(obj) {
		for(var i=0; i<srcKeys.length; i++) {
			if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
				return false;
			}
		}
		return true;
	});
	// Only change code above this line
	
	console.log("output:", arr);
	return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
