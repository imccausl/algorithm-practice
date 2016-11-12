
function mutation(arr) {
	var comparison = arr[0].toLowerCase(),
		comparisand = arr[1].toLowerCase(),
		array = [], 
		containsChar = [];
		
	array = comparisand.split("");
		
	for (var i = 0; i<array.length; i++) {
		if (comparison.indexOf(array[i]) !== -1) {
			containsChar.push(true);
		} else {
			containsChar.push(false);
		}
	}
	
	
	console.log(comparisand, containsChar);
	
	return containsChar.every(function(element) {
		return element === true;
	});
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["floor", "for"]));
