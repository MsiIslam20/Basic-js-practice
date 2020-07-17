//Factorial using For loop
function factorial(n){
    var factInit = 1;
    for(var i = 1; i <= n; i++){
        factInit = factInit * i
    }
    return factInit
}

var result = factorial(5)
console.log(result);

//Factorial using while loop

function factorial(n){
    var factInit = 1;
    var i = 1;
    while(i <= n){
        factInit = factInit * i
        i++
    }
    return factInit
}


var result2 = factorial(10);
console.log(result2);

//Factorial using Recursive Function

//6! = (6-1)! * 6
//7! = (7-1)! * 7
//8! = (8-1)! * 8
//n! = (n-1)! * n

function factorial(n){
    if ( n == 0){
        return 1
    }
    else{
        return n  * factorial(n-1)
    }
}
var result3 = factorial(8);
console.log(result3);

