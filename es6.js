//ES6 -> ECMA SCRIPT 6 STANDARD
//1.Var,let,const => refer variable.js
//2.Arrow Function 
var fun = () => {
    console.log("hello")

}
fun()

//3.Destructring Operator -> we need to put square bracket otherwise output will be undefined


var arr = [1,2,3,4,5]
var [a,b,c,d,e] = arr
console.log(a,b,c,d,e)

//Spread Operator
var arr = [1,2,3,4,5]
var arr1 = [...arr,6,7]
console.log(arr1)