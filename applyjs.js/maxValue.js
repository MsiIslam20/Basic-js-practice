var abdul = 1200;
var khalik = 700;
var salam = 900;

if(abdul  > khalik ){
    if(abdul > salam){
        console.log("Abdul Is richer man");
        
    }else{
        console.log("Salam Is richer man");
    }
} else{
    if(khalik > salam){
        console.log("khalik Is richer man");
    }
    else{
        console.log("Salam Is richer man");
    }
}

//find max value 

var max = Math.max(abdul, khalik, salam)

console.log(max);
