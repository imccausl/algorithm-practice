function fearNotLetter(str) {
	var char = 0,
		prevChar = 0,
		missingChar = undefined;
	
	for(var i = 0; i < str.length; i++) {
		char = str.charCodeAt(i);
		console.log(char, prevChar);
		if ((char - 1) !== -1) {
			if ((char - 1) === (prevChar +1)) {
				missingChar = String.fromCharCode(prevChar + 1);
				console.log("Missing letter:", missingChar);
			}
			
		}
		prevChar = char;
	}
	
	if (!missingChar) {
		console.log("No letters missing!");
	}
	
	return missingChar;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");
