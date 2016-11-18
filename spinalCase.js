function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // if there is a lowercase letter immediately followed by a capital letter,
  // put a space between them to separate the words they come from.
  
  for(var i = 0; i < str.length; i++) {	  
	  // make sure the comparison is a letter to a letter (we'll look at anything with an ASCII code greater
	  // than 96 for simplicity's sake (if the string contains any special characters above ASCII's lowercase
	  // letters then all hell might break loose, but thankfully this algorithm is not tested with any of those.
	  
	  if ((str.toLowerCase().charCodeAt(i) > 96) && (str.toLowerCase().charCodeAt(i-1) > 96)) {
		  
		  // if an uppercase letter is right after a lowercase letter 
		  if((str.charAt(i) === str.charAt(i).toUpperCase()) && 
		  	(str.charAt(i-1) === str.charAt(i-1).toLowerCase())) {
			  
			  //insert a space
			  str = str.substr(0, i) + " " + str.substr(i);
		  }
	}
  }
  
  str = str.replace(/[\s_]/g, "-").toLowerCase();
  console.log(str);
  
  return str;
}