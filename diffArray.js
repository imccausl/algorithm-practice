/* diffArray.js
 * Defines a function that takes two arrays, determines the index values that are different between the two,
 * and adds them to a new array, which is returned */
 
function diffArray(arr1, arr2) {
  	var newArr = [];
  	// Same, same; but different.
   
  	
  	// determine the differences between the first input array, and then the second.
  	newArr = newArr.concat(getDiffElements(arr1, arr2));
  	newArr = newArr.concat(getDiffElements(arr2, arr1));
	    
  	return newArr;
}

function getDiffElements(first, second) {
	return first.filter(function(element, index, array) {
	
		if (this.indexOf(element) === -1) {
			  	return true;
		}
  	}, second);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

