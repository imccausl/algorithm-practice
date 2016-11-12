
function truncateString(str, num) {
    var trunc = 0;
    
    if (num >= 3) {
	    trunc = num-3;
    } else {
	    trunc = num;
    }
    
    if (num < str.length) {
	    str = str.slice(0, trunc);
	    str = str + "...";
    } 
    
    console.log(str);
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("Absolutely Longer", 2);

