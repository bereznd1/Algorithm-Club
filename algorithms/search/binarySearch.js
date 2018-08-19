// ==============================================
// HOW IT WORKS OVERALL:
// ============================================
// - you have an array thats in chronological order, & a search element (you wanna find out at what index in the array that search element appears)
// - add the MIN INDEX of array + MAX INDEX and DIVIDE BY 2 to find a position near the middle
// - select the element at that middle index
// - check to see if that selected element is LESS THAN the SEARCH ELEMENT
// - if its LESS, you make the MIN INDEX equal to the SELECTED ELEMENT'S INDEX + 1 (now you're only looking ABOVE that element)
// - if its MORE, you make the MAX INDEX equal to the SELECTED ELEMENT'S INDEX - 1 (now you're only looking BELOW that element)
// - you keep on running the comparison loop until the SELECTED ELEMENT is = TO the SEARCH ELEMENT
// =====================================================



// ================================================
// ACTUAL BINARY SEARCH
// ================================================

function binarySearch(numbersArr, searchElement) {
  // Set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = numbersArr.length - 1;
  var minIndex = 0;

  // This loop will run over and over as long as the condition is true.
  while (minIndex <= maxIndex) {
    // Get a position near the middle of the array.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    // Get the element at that position.
    currentElement = numbersArr[currentIndex];

    // Test it.

    // If it's LESS than the searchElement, look *above* this value.
    if (currentElement < searchElement) {
      // Make the new Min index 1 value higher than current middle point that you found above
      // This way, you eliminate the numbers in the array below that point, and start the comparison process again from the next position in the array
      minIndex = currentIndex + 1;
    }

    // If it's MORE than the searchElement, look *below* this value.
    else if (currentElement > searchElement) {
      // Make the new Max index 1 value lower than current middle point that you found above
      // This way, you eliminate the numbers in the array above that point, and start the comparison process again from the original Min index to the new Max index
      maxIndex = currentIndex - 1;
    }

    // If the currentElement = the searchElement, return the index (position) of the current index, b/c thats where the search element was found
    else {
      return currentIndex;
    }
  }

  // If the searchElement is not found at all in the array, return false. 
  return false;
}



// ==========================================
// Running the search
// ==========================================

//ARRAY MUST BE IN CHRONOLOGICAL ORDER
var result = binarySearch(
  [1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784],
  89
);
console.log(result);



// ===========================================
// Notes on Binary Search:
// ============================================

// - Big O notation of O(lg n).
// - Binary Search: array must be in order before performing search.
// - Linear Search: array doesn't have to be in order.
// - Binary Search accesses data RANDOMLY; Linear Search accesses data SEQUENTIALLY