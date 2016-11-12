
function chunkArrayInGroups(arr, size) {
  var 	chunk = [],
  		length = arr.length,
  		width = size;
  		i = 0;
  
  do {
	  chunk.push(arr.slice(i,width));
	  console.log(i, width);
	  i = i + size;
	  width = width + size;
} while (i < length);

  console.log(chunk);
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

