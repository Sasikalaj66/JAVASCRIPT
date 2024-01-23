//Using Arrow Functions:

//Callback:
var SubmitForm = (buttonclicked, db) => {
    setTimeout(() => {
        console.log(buttonclicked)
        db();
    }, 2000)
}
var db = () => {
    console.log("Form submitted successfully and stored")
}

SubmitForm("Form Submit button clicked", db)

//Promises:
var isAuthenticated = () => {
    return Math.random() > 1;   // not success if symbol is < then it will be success
}
var Login = () => {
    return new Promise((response, noresponse) => {
        setTimeout(() => {
            if (isAuthenticated()) {
                response("Your Authentication is Successful");
            } else {
                noresponse("Your Authentication is not Successful");
            }
        }, 1000);
    });
}
Login()
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });

//asyncAwait:
var commentCode = async () => {
    return new Promise(
        (commentValue) => {
            setTimeout(() => {
                commentValue("This my 1st post's Comment icon")
            }, 1000);

        }
    )

}
var likeCode = async () => {
    return new Promise(
        (likeValue) => {
            setTimeout(() => {
                likeValue("This my 1st post's like icon")
            }, 1000);

        }
    )

}
var shareCode = async () => {
    return new Promise(
        (shareValue) => {
            setTimeout(() => {
                shareValue("This my 1st post's Share icon")
            }, 1000);

        }
    )

}
var saveCode = async () => {
    return new Promise(
        (saveValue) => {
            setTimeout(() => {
                saveValue("This my 1st post's Save icon")
            }, 1000);

        }
    )

}


var post = async () => {
    var post = new Promise(
        (postResponse) => {
            setTimeout(() => {
                postResponse("This my 1st post")
            }, 1000);
        }
    );
    var [feed, comment, like, share, save] = await Promise.all([post, commentCode(), likeCode(), shareCode(), saveCode()])

    console.log(feed);
    console.log(comment);
    console.log(like);
    console.log(share);
    console.log(save);
}

post()

