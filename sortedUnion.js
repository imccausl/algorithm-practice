// uniteUnique()
// create a new array from the arguments passed to the function made out of only unique elements.

function uniteUnique(arr) {
	var newArr = [];
		
	console.log(arguments, arguments.length);
	
	if (arguments['0'] !== {}) {
		// the first argument/array is *always* unique. Use it to compare the others against.
		for(var i = 0; i < arguments['0'].length; i++) {
			newArr.push(arguments['0'][i]);
		}
					
		for (var key in arguments) {
			for (i = 0; i < arguments[key].length; i++) {
				if(newArr.indexOf(arguments[key][i]) === -1) {
					newArr.push(arguments[key][i]);
				}		
			}
		}	
	} else {
		console.log("No arguments passed to function!");
		return -1;
	}
	
	console.log(newArr);
	return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);