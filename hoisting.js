//variable hoisting
/*console.log(a) // Reference error

console.log(a) //undefined
var a=10 

console.log(a) 
let a=10 // reference error
*/
//Functionality hoisting
konguclg()
function konguclg(){
     
} // Its like a "var" ..it can recognising but cannot access

konguclg(5,10)
function konguclg(a,b){
    for (var i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number "+i+" is even")
        }
        else{
            console.log("The number "+i+" is odd")
        }
    }
     
}