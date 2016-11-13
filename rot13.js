function rot13(str) { // LBH QVQ VG!
  var buffer = 0, test = 0;
  var newString = "";
  
  for (var i = 0; i < str.length; i++) {
	  newString = newString.concat(String.fromCharCode(convertROT13(str.charCodeAt(i))));
  }  
  
  console.log(newString);
    
}

function convertROT13(code) {
	var howMuchBelow = 0;
	
	if ((code - 13) < 65) {
		if (code > 64) { // ignore spaces and punctuation
			// its a character from A-Z so how far below 65 (ie. so that A in ROT13 counts backward from Z)?
			howMuchBelow = 64 - (code-13);
			code = "Z".charCodeAt(0) - howMuchBelow;
		} else {
			return code;
		}
	} else {
		code = code - 13;	
	}
	
	return code;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
