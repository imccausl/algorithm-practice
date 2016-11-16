function myReplace(str, before, after) {
	var index = str.indexOf(before);
	
	// check the case of the first letter of the main string.
	if (checkCase(str[index])) {
		after = changeCase(after); // if first letter is uppercase, change the after string to reflect that.
	}
	
	str = str.replace(before, after);
	
	console.log(str);
	return str;
}

function checkCase(str) {
	if (str.charAt(0) === str.charAt(0).toUpperCase()) {
		return true;
	}
	return false;
}

function changeCase(str) {
	return str.charAt(0).toUpperCase() + str.substr(1);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("Let us go to the store", "store", "mall");