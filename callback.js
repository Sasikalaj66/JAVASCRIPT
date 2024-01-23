//CALLBACK
//Ex : 1
function somuRamu(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },3000)

}
function aniMini(){
    console.log("Not come to clge")
}
somuRamu("Hello Somu and Ramu\nWelcome to KEC",aniMini)

//Ex : 2
function sasi(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },3000)

}
function varshan(){
    console.log("Email id login")
}
sasi("Hello sasikala\nWelcome to KEC",varshan)

//Ex:3
function SubmitForm(buttonclicked,db){
    setTimeout(function()
    {
      console.log(buttonclicked)
      db();
    },2000)
  }
  function db(){
    console.log("Form submitted successfully and stored")
  }
  
    SubmitForm("Form Submit button clicked",db)
  

