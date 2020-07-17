
function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var chars = str[i]
        reverse = chars + reverse;
    }
    return reverse;
}

var statement = "Hello I'm Saidul Islam. I do web development. My passion is web development."
var result = reverseString(statement);

console.log(result);
