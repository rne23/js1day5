// Day 5 App

//Main
var promptSquare = prompt('Please enter a number to square:');
alert(numSquare(promptSquare));

var promptCapAndPun = prompt(`Please enter a string to capitalize and punctuate
.`);
alert(capitalAndPunct(promptCapAndPun));

var promptHalfStringReverse = prompt(`Please enter a string to split into halves
  , reverse each half, and swap each half with the other.`);
alert(reverseHalfStrings(promptHalfStringReverse));

//Takes a number and returns the square of that number.
function numSquare (a){
  if (isNaN(a) == false){
    let x = a**2;
    return x;
  } else {
    wrongNumber(a);
  }
};

//If user did not enter a number in numSquare.
function wrongNumber (a){
  alert('You did not enter a number!');
  let x = prompt('Please enter a number:');
  numSquare(x);
};

//Capitalizes the first letter of a string, and adds a period (.) to the end of
//the string if it doesn't already end with a period.
function capitalAndPunct (a){
  if (typeof(a) === 'string'){
    let x = a.substring(0,1).toUpperCase();
    let y = x + a.substring(1);
    if (y.substring(y.length-1, y.length) != '.'){
      y += '.';
      return y;
    }
    return y;
  } else {
    alert('You did not enter a string!');
  }
};

//Creates a string that will flip the position of the first and second half of a
//string. For example, the string “abcdef” would be returned as “defabc”.
function reverseHalfStrings (a){
  if (typeof(a) == 'string'){

    let halfIndex = Math.ceil(a.length / 2);
    let firstHalf = a.substring(0,halfIndex);
    let secondHalf = a.substring(halfIndex,a.length);

    let u = firstHalf.split("");
    let v = u.reverse();
    let w = v.join("");

    let x = secondHalf.split("");
    let y = x.reverse();
    let z = y.join("");

    return z + w;
  }
};
