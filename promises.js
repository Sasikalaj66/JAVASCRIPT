//PROMISES
//Ex : 1
/*function isAuthenticated() {
  return Math.random() > 1;   // not success if symbol is < then it will be success
}
function Login() {
  return new Promise(function (response, noresponse) {
    setTimeout(function () {
      if (isAuthenticated()) {
        response("Your Authentication is Successful");
      } else {
        noresponse("Your Authentication is not Successful");
      }
    }, 1000);
  });
}
Login()
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });

//Ex : 2
function email_id() {
  return Math.random() < 1;   // not success if symbol is < then it will be success
}
function sasi() {
  return new Promise(function (response, noresponse) {
    setTimeout(function () {
      if (email_id()) {
        response("My Email id is login successfully");
      } else {
        noresponse("My Email id is not login successfully");
      }
    }, 1000);
  });
}
sasi()
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });

//Ex : 3 => Location Implementation

function isLocationValid(Loc) {
  var v = "Melbourne"
  if (v === "valid") {
    return true
  }
  else {
    return false
  }
}
function location() {
  return new Promise(function(response, errorMsg){
    setTimeout(function () {
      Loc = "Melbourne"
      console.log("The location is",Loc)
      if(isLocationValid) {
        return response("Location Found")
      }
      else {
        return errorMsg("Location not Found ")
      }
    },2000)

})

}
location()
  .then(function(response) {
      console.log(response);
  })
  .catch(function(response){
    console.log(response);
  });*/
  
  // Using Arrow functions

  var isAuthenticated=() => {
    return Math.random() > 1;   // not success if symbol is < then it will be success
  }
  var Login=()=> {
    return new Promise(function (response, noresponse) {
      setTimeout(()=> {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then((message)=> {
      console.log(message);
    })
    .catch((message)=> {
      console.log(message);
    });
