function pairElement(str) {
	var strArray = str.split(""),
		arr = [];
	
	// pattern: if G then pair with C; 
	//			if C then pair with G; 
	//			if A then pair with T; 
	//			if T then pair with A.
	
	function getArrayElements(array, callback) {
		var newArray = [];
		
		array.forEach(function(el, index) {
			newArray.push(callback(el));
		});
		
		return newArray;
	}
	
	arr = getArrayElements(strArray, function(elm) {
		var pairedArray = [];
		pairedArray.push(elm);
		
		switch (elm) {
			case "G":
				pairedArray.push("C");
				break;
			case "C":
				pairedArray.push("G");
				break;
			case "A":
				pairedArray.push("T");
				break;
			case "T":
				pairedArray.push("A");
				break;
			default: 
				console.log("Error: Not a valid element!");
				pairedArray = -1;
				break;
		}
		return pairedArray;
	});
	
	if (arr.indexOf(-1) !== -1) {
		console.log("An error occured:", arr);
	} else {
		console.log("Success!", arr);
		return arr;
	}
}

pairElement("GCG");