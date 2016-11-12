
function largestOfFour(arr) {
	var reduced = [],
		sortedArray = [];
	
	arr.forEach(function(element) {
		reduced = element.reduce(function(previous, current){			
			if (current > previous) {
				return current;
			} else {
				return previous;
			}
		});
		sortedArray.push(reduced);
	});

	arr = sortedArray;
	return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

