function translatePigLatin(str) {
	var firstChs = "";
	
	function checkForConsonant(str) {
		var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
		
		for (var i=0; i < vowels.length; i++) {
			if (str.charAt(0).toLowerCase() === vowels[i]) {
	
				if (firstChs) {
				 	str = str + firstChs + "ay";
				} else {
					str = str + "way";
				}
		
				return str;
			}
		}
		
		firstChs = firstChs + str.substr(0,1);
		str = str.substr(1);
		
		return checkForConsonant(str);
	}
	
	str = checkForConsonant(str);
	console.log(str);
	return str;
}

translatePigLatin("consonant");
translatePigLatin("spontaneous");
translatePigLatin("ageless");