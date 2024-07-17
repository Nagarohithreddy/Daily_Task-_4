//Functions without Parameters

function greet(){
    console.log("Hello World!");
}

greet()

//Functions with Parameters

function addnumbers(a,b){
    console.log(a + b);
}

addnumbers(-5,10)

//Functions with return Statements

function multiply(x,y){
    return x * y
}

let result = multiply(87,76)
console.log(result);

//Combining Functions

function calculateRectangleArea(length,width){
    return multiply(length,width);
}

let area = calculateRectangleArea(15, 10);
console.log(area);

//Functions using Default Parameters

function greetuser(name = "Guest"){
    console.log(`Hello,${name}!`);
}

greetuser("Rohith")
