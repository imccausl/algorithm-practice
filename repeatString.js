
function repeatStringNumTimes(str, num) {
  var newStr = "";
  
  for (var i=0; i<num; i++) {
	  newStr += str;
  }
  console.log(newStr);
  return newStr;
}

repeatStringNumTimes("abc", 3);

