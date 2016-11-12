function slasher(arr, howMany) {
    arr = arr.splice(howMany, arr.length);
    console.log(arr);
    return arr;
}

slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);