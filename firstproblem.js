
function cubeNumber(number) {
    var result = number* number * number;
// console.log(result);
    if(inputNumber!=='number'|| inputNumber2 !=='number'|| inputNumber3==='number')
    {
        console.log('this is valid number');
    }else
    {
        console.log('this is not valid number');
    }
    return result;
  }

 var inputNumber=3;
 var inputNumber2=4;
 var inputNumber3='number';

 var result = cubeNumber(inputNumber);
 console.log(result);

 var result2 = cubeNumber(inputNumber2);
 console.log(result2);

var nonNumberInput = 'number';
 var result3= cubeNumber(nonNumberInput);
 console.log(result3);

