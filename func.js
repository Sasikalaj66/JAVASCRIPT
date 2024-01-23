//FUNCTIONS
//Example : 1 => without argument and without return type
function fun(){
    console.log("Function sample example")
}
fun()

//Example : 2 => Function with argument and without return type
function fun(a,b)
{
    for (i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number "+i+" is even")
        }
        else{
            console.log("The number "+i+" is odd")
        }
    }
 }fun(5,10)

 //Example : 3 =>with argument and with return type
 function fun(a,b){
    return (a-b)
 }
 console.log(fun(10,5))

  //Example : 4 =>with argument and without return type
  function fun(a){
    var a=11
    
    return (a)
 }
 console.log(fun(6))

 
