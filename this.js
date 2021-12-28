// Manually Providing Context
// Call()
// 1.with call we can pass in each arg individually
// 2.method calls a function with a given this value and arguments provided individually.
// .call(scope, arg1, arg2, arg3)
function num(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
num.call(1,2,3,4);


// apply()
// 1.Pass first parameter as a this value
// 2.Pass second parameter as an array of arguments
// 3.It is similar to call()
// .apply(scope, [arg1, arg2, arg3])
function num1(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
num1.apply(1,[2,3,4]);

// bind()
// 1.Bind returns an instance of a function that can be executed
// 2First Parameter is 'this'
// 3.Second parameter is a Comma separated list of arguments (like Call)
var num2 = function() {
    console.log(this)
}.bind(1);
num2();

// Prototype Inheritance
// 1.In Javascript we don’t have classes, rather we only have objects. 
// 2.Implement inheritance with objects we can get the help of prototypical inheritance.
// 3.Prototype is just a parent of another object.
// 4.Every object in javascript (except a single one) has a prototype object.
// 5.When we access a property or method in an object, the javascript engine first looks for that property on the object itself.
//   If the property is not defined inside its prototype then the engine looks if the prototype is inherited from another prototype.
//   This way it will look all the way up to the base object. This is the prototypical inheritance.