function bouncer(arr) {
 	var filtered = [];
 	
 	filtered = arr.filter(function(element) {
	 	if (element != false) {
		 	return element;
	 	}
 	});
 	
  	return filtered;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);

