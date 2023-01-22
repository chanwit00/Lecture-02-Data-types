// 1.Function Definition
function printHello(name) {
    console.log("Hello " + name);
    return name + " hello!";
}

function printgoodbye(name){
    console.log("Hey ",name);
    return name +" Goodbye !";
}

console.log(printHello.name)
// // 2.Function Invocation

let result = printHello("chanwit !");
console.log(result);


console.log(printgoodbye.name);

let bye = printgoodbye("Green ");
console.log(bye);
