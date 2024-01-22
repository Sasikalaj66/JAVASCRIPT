//SCOPES
//Global
i = 0
Sum = 0
while(i<20)
{
    Sum += i
    i++
}
console.log(Sum)

//Local scope

for(let i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)

//Block scope
var a=10
console.log(a)
{
    let a = 5
    let b = 5
    console.log(a)
    console.log(b)
}
console.log(a)
//console.log(b) => Reference error

var a=10
console.log(a)
{
    a = 5
    b = 5
    console.log(a)
    console.log(b)
}
console.log(a)
//console.log(b) 