/* sumAll.js
 * Finds the sum of the first and last numbers in a two-item array. */
 
function sumAll(arr) {
	var highest = 0, 
		lowest = 0,
		sum = 0,
		newArray = [];
		
		// first we need to figure out which is the highest and which is the lowest.
		highest = Math.max.apply(null, arr);
		lowest = Math.min.apply(null, arr);
				
		// create an array with all the numbers from lowest to highest
		sum = lowest;
		do {
			newArray.push(sum);
			sum++
			lowest = lowest + sum;
		} while(sum < highest + 1);
		
		console.log(newArray);
		// return the sum of all items in the array
		return newArray.reduce(function(a, b) {
			return a + b;
		});
}

console.log(sumAll([5, 10]));
console.log(sumAll([1, 4]));