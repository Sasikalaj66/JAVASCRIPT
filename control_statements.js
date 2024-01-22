//Looping
//For loop
Sum = 0
var i;

for(i=0;i<10;i++)
{
    Sum += i
}
console.log(Sum)

//While loop
i = 0
Sum = 0
while(i<20)
{
    Sum += i
    i++
}
console.log(Sum)

//Do...while
i = 0
Sum = 0
do{
    Sum =+ i
    i++
}while(i<16)
console.log(Sum)

//EX : 1
arr = [1,2,3] // Valid input
console.log(arr.length) // print the length of the array
for( var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//EX : 2
arr = [1,2,3.6,true,false] //valid input
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//EX : 3
arr = [1,2,] //valid input
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//EX : 4
arr = [1,"string",3.6,"kec"] //valid input
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//for in loop
arr = [1,"string",3.6,"kec"]
for (const index in arr){
    console.log("The value present in index is",arr[index])
}

//for of loop
arr = [1,"string",3.6,"kec"]
for ( value of arr){
    console.log(value)
}
//EX 1: To explain in depth
//for each loop
arr = [1,"string",3.6,"kec"] 
arr.forEach(value=>{
    console.log(value)
})

