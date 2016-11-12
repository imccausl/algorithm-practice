function destroyer(arr) {
	var filtered = [];
	var args = [];
	
	for (var i=1; i<arguments.length; i++) {
		args.push(arguments[i]);
	}
	
	console.log(args);
	filtered = arr.filter(function(element) {
		return args.forEach(function(el) {
			return element === el;
		});
	});
	
	console.log(filtered);
	return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);