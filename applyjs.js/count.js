var statement = "Hello I'm Saidul Islam. I do web development. My passion is web development."

var count = 0;

for(var i = 0; i < statement.length; i++){
    var chars = statement[i]
    if(chars == " " && statement[i-1] != " "){
        count++
    }
}
count++

console.log(count);
