// we want to create a function that returns the sum of odd fib numbers less than the number passed as an argument.

function sumFibs(num) {
	
	// first, we'll just get the full get Fibonacci sequence for all numbers less than or equal to num.
	
	var seqArr = [];
	
	// getSequence(length) : gets a sequence of fibonacci numbers up to num and returns them as an array.
	
	function getSequence(length) {
		var fibArr = [ 1 ]; // our array will have the first 1 of the sequence for simplicity.
		var i = 0;
					
		while(fibArr[i] < length-1) {
							
			if (!fibArr[i-1]) { // if the contents of fibArr at i-1 is undefined or NaN
					
				fibArr.push(1); // then add 1, because we are at the beginning of the sequence.
								 
			} else {
				fibArr.push(fibArr[i] + fibArr[i-1]); // add the sum of the  current number minus the previous number to the sequence.
			}
			
		i++;
		
		}
		
		if (fibArr[i] > length) {
			fibArr.pop(fibArr[i]); // sometimes the last number is one too many so get rid of it if so.
		}
		
		return fibArr;
	}
	
	seqArr = getSequence(num);
	
	// OK so we have the full sequence ...
	
	num = seqArr.filter(function(el) { // ... filter out the even numbers ...
		return (el % 2);
	}).reduce(function(a, b) { // ... and then find the sum of all the remaining numbers!
		return a + b;
	});
	
	console.log(num); // and voila! we've done it!
	
	return num;
}

sumFibs(4);
sumFibs(4000000);
sumFibs(75025);
sumFibs(75024)

