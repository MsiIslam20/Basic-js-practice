//Fibonacci series by using for loop

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];
function fibonacci(n){
    var fibo = [0,1]

    for (var i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo
}
var result = fibonacci(15)
console.log(result);


//Fibonacci series using While loop
function fibonacci(n){
    var fibo = [0,1];
    var i = 2;

    while ( i <= n){
        fibo[i] = fibo[i-1] + fibo[i-2];
        i++
    }
    return fibo
}
var resultFour = fibonacci(2)
console.log(resultFour);


//Fibonacci series element by recursive function

function fibonaccii(n){
    if(n == 0){
        return 0
    } if(n == 1){
        return 1
    }
    else{
       return fibonaccii(n-1) + fibonaccii(n-2) 
    }
}

var result2 = fibonaccii(12)
console.log(result2);

//Fibonacci full series by recursive function

function fibonaccci(n){
    if(n == 0){
        return [0]
    } if(n == 1){
        return [0,1]
    }
    else{
       var fibo = fibonaccci(n-1)
       var nextelement = fibo[n-1] + fibo[n-2]
       fibo.push(nextelement)
       return fibo

    }
}

var result3 = fibonaccci(10)
console.log(result3);




