function getIndexToIns(arr, num) {
 	var index = 0;
 	
 	arr.push(num);
 	
 	arr.sort(function (a, b) {
	 	return a - b;
 	});
 	
 	index = arr.indexOf(num);
 	 	
 	console.log(arr, num, "put it at index:", index);
 	return index;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);

