function matchFinder(string1, string2) {
    // Validate input strings
    if (typeof string1 !== 'string' || typeof string2 !== 'string' || string1.length === 0 || string2.length === 0) {
      return "Invalid input strings. Please provide valid non-empty strings.";
    }
  
//    conditional stetment string 1 and string2 includes true or false return krbe
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  var string1= "JohnDoe";
var string2= "John";
  // var string3 = "JavaScript";
  // var string4 = "Code";
//  var string5 ="Peter Parker";
//  var string6= "pen";

  var result1 = matchFinder(string1, string2);
  console.log(result1); // This will print true
  
//   var invalidString = 123; // Invalid input
//   var result2 = matchFinder(string1, invalidString);
//   console.log(result2); S