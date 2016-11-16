/* convertToRoman.js
 * converts input number to a roman numeral version. */
 
function convertToRoman(num) {
	var decValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romValue = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var rom = "";
	
	for(var i=0; i < decValue.length; i++) {
		console.log(decValue[i]);
		while(decValue[i] <= num) {
			console.log(decValue[i], num, romValue[i]);
			rom += romValue[i];
			num -= decValue[i];
		}
	}
	
	console.log(rom);
	return rom;
}

convertToRoman(5384);