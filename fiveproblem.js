


// function canPay(changeArray, totalDue) {
//     // Bonus: Check if the first element of input is an empty array
//     // if (changeArray.length === 0) {
//     // //   return false;
//     // }
  
    
//   }
  
 
  
//   const canBuyChips = canPay();
//   console.log(canBuyChips);

 // Example usage:
//  global variable use korci
  const notes = [1, 2, 5];
   const chipPrice = 10; 

function canPay(changeArray, totalDue) {
    // Validate input strings
   if (notes<chipPrice){
    return true
   }else{
    return false
   }
   if (changeArray.includes(totalDue)) {
     return true;
   } else {
     return false;
   }
 
}
const result=canPay(10);
console.log(result);