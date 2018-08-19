// =========================================================================
// This first part simply creates an array of random numbers to work with.
// ==================================================================================
var arraySize = 40;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}


// ================================================
// ACTUAL INSERTION SORT
// ================================================

function insertionSort(items) {

  // Declaring variables to be used in the For loops below.
  var i;
  var j;

  // 1st For loop iterates through the length of the array.
  for (i = 0; i < items.length; i++) {

    // Stores the current element being iterated as a variable for later use.
    var value = items[i];

    // 2nd For loop iterates through the array backwards (right to left), starting at the element just before the current item in the 1st loop.

    // If the current item in 2nd For loop is > current item in 1st For loop....
    for (j = i - 1; j > -1 && items[j] > value; j--) {

      // Shift it over one spot to the right
      items[j + 1] = items[j];
    }

    // If the current item in 2nd For loop is <= current item in 1st For loop, insert the "value" variable (current item in 1st loop) to be one spot to the right of current item in 2nd For loop
    items[j + 1] = value;
  }

  //Return the sorted array
  return items;
}



// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));



// ===========================================
// Notes on Insertion Sort:
// ============================================

// Big O notation of O(N^2) because of Nested For Loops.

// Why use this sort?
// - When the data is already nearly sorted
// - When the input size is small
// - Insertion sort is STABLE
//      - This means that identical items in the array will appear in the same order when the array is sorted as they did
//        when the  array was not sorted
//      - So if you had an array of words that you needed to sort alphabetically based on their first letters: ["tupac", "tamborine",
//        "traffic", "car", "eminem"], then the 3 words that start with "T" would remain in the order "tupac", "tamborine", "traffic" 
//        after the sort is complete
//      - In UNSTABLE sorts, the order of those 3 "T" words could end up being switched up any which way after the sort is complete
