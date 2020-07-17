//Convert inch to Feet using Function
function inchToFeet(inch){
    var feet = inch / 12;
    return feet
}

var resultArray = [120, 108, 96]

var result = inchToFeet(resultArray[2]);
var resultTwo = inchToFeet(2000);
var resultThree = inchToFeet(6520);

console.log(result);
console.log(resultTwo);
console.log(resultThree);
