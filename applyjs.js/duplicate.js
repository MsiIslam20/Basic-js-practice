var number = [100, 20, 30, 55, 40 ,222, 66,9,9, 100, 500, 20]
var unique =  [];

for(var i = 0; i < number.length; i++){
    var element = number[i]
    var index = unique.indexOf(element)
    if(index == -1){
        unique.push(element)
    }
}
console.log(unique);
