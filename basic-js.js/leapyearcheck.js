//One way to Check Leap year or not
function isLeapYear(year){
    const remainder = year % 4;

    if(remainder == 0){
        console.log("This year: " + year + " is a Leap Year");   
    }
    else{
        console.log("This year: " + year + " is not a Leap Year");   
    }
}

var result = isLeapYear(2000);
console.log(result);


//Proper Way to Check Leap year or not
function isLeapYear(year){
    const remainder = year % 4;
    const remainderSecond = year % 100;
    const remainderThird = year % 400;

    if(remainder == 0 && remainderSecond !=  0 || remainderThird == 0){
        console.log("This year: " + year + " is a Leap Year");   
    }
    else{
        console.log("This year: " + year + " is not a Leap Year");
    }
}

var result2 = isLeapYear(1700);
console.log(result2);


//Short form
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var result3 = leapYear(1700)
console.log(result3);

  
  
