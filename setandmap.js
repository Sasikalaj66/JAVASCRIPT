
/*//SET
//1st Eg
setExample=new Set("sasi","jagan","devi")
console.log(setExample)

setExample=new Set(["sasi","jagan","devi"])
console.log(setExample)

// add the element into the set
setExample.add("papu")
setExample.add("flower")
setExample.add("bird")
setExample.add("papu")
console.log(setExample)

//for of loop => it will give the value as output
for ( value of setExample){
    console.log(value)
}

//for in loop => it will not give the output in set
for (key in setExample){
    console.log(key)
}

//MAPS
mapExample=new Map("id","19ECR188")
console.log(mapExample) // It gives the error because no key value pair present

mapExample=new Map(["id","19ECR188"])
console.log(mapExample) // It also gives the error
*/
mapExample=new Map([
    ["rollno","19ECR188"],
    ["name","varshan"]
])
console.log(mapExample) 

//for in
for(key in mapExample){
    console.log(key)
}
//for of
for(value of mapExample){
    console.log(value)
}

console.log(mapExample.has("name"))

// To add 

mapExample.set("age","22");
mapExample.set("Mobile","6986765889")
console.log(mapExample)

//To delete
mapExample.delete("Mobile","6986765889")
console.log(mapExample)                                                                                                                                      