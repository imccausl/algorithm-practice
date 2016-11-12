
function confirmEnding(str, target) {
    var test = "",
    	start = str.length - target.length;
    	
    test = str.substr(start);
    
    if (test === target) {
	    return true;
    }
    
    return false;
}

confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
