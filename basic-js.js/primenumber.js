
function isPrime(n){
    for(var i = 2; i < n ; i++){
        if(n % i == 0){
            return "your number " + n + ": is not a prime number"
        }
    }
    return "your number " + n + ": is a prime number"
}
var result  = isPrime(97);

console.log(result);



