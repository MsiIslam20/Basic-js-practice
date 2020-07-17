var marks = [100, 20, 30, 55, 40 ,222, 66,939]
var newNum = marks[0];

for(var i = 0; i < marks.length; i++ ){
    var element = marks[i]
    if(element > newNum){
        newNum = element
    }
}
console.log("Highest Value is: " + newNum);
