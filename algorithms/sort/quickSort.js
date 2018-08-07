function quickSort(array) {
    if (array.length < 2) {
      return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    array = quickSort(left).concat(pivot, quickSort(right));
  
    return array;
  }
  
  // random number array:
  var number = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
  
  // random string array:
  var string = ["Wario", "Toad", "Yoshi", "Waluigi", "Princess Daisy", "Bowser", "Mario", "Luigi", "Donkey Kong", "Princess Peach"]
  
  console.log(quickSort(number));
  console.log(quickSort(string));