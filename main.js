// Operations: Object Access, Invocation
console.log("What's your name?");

// Operations: Object Access, Invocation, Function Expression
process.stdin.on('data', function (data) {

    // Operations: Variable Declaration, Assignment, Object Access, Invocation
    const name = data.toString().trim();

    // Operations: Object Access, Invocation, Template Literal
    console.log(`Hello, ${name}!`);

});