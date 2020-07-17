
function totalArry(marks){
    var sum = 0;

    for(var i = 0; i < marks.length; i++ ){
        var element = marks[i]
        sum += element
    }
    return sum
}

var marks = [100, 20, 30, 55, 40 ,222, 66,99];
var result = totalArry(marks)
console.log("Total marks of all is: " + result);