function convertHTML(str) {
	// &colon;&rpar;
	var find = [ /&/g, /</g, />/g, /"/g, /'/g ],
		replace = [ "&amp;", "&lt;", "&gt;", "&quot;", "&apos;" ];
	
	for(var i=0; i<find.length; i++) {
		str = str.replace(find[i], replace[i]);	
	}
	
	console.log(str);
	return str;
}

convertHTML("Dolce & Gabbana");

