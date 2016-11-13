function destroyer(arr) {
	var filtered = [];
	var args = [];
		
	for (var i=1; i<arguments.length; i++) {
		args.push(arguments[i]);
	}

	filtered = arr.filter(function(el) {
		if (args.indexOf(el) === -1) {
			return true;
		}
		
		return false;
	});
		
	console.log(filtered);
	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
