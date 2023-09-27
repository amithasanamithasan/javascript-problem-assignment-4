function sortMaker(arr) {
    // Validate input
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
      return "Invalid input. Please provide an array with two numeric elements.";
    }
  
    // Check if any element is negative
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid";
    }
  
    // Compare the two elements and return the result
    if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[1] > 0) {
      return arr.sort((a, b) => a - b);
    } else {
      return arr.sort((a, b) => b - a);
    }
  }
  
  // Example usage:
  var inputArray1 = [5, 3];
  var result1 = sortMaker(inputArray1);
  console.log(result1); // This will print [3, 5]
  
  var inputArray2 = [5, 5];
  var result2 = sortMaker(inputArray2);
  console.log(result2); // This will print "equal"
  
  var inputArray3 = [-1, 2];
  var result3 = sortMaker(inputArray3);
  console.log(result3); // This will print "Invalid"
  
  var invalidInput = "Not an array";
  var result4 = sortMaker(invalidInput);
  console.log(result4);