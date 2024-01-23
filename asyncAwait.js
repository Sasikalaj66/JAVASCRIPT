//async dummy eg
async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                response("Example for async/await");
            }, 1000);
        }
    );
    console.log(await promise); // await => printing the response
}
asAw();
//Without await ouput is promise{spending}
//Wthout async output is error

//EXAMPLE : 1 => This code print one by one
//Kind of our own Instagram
async function commentCode(){
    return new Promise(
        function(commentValue){
            setTimeout(function () {
                commentValue("This my 1st post's Comment icon")
            }, 1000);

        }
    )

}
async function likeCode(){
    return new Promise(
        function(likeValue){
            setTimeout(function () {
                likeValue("This my 1st post's like icon")
            }, 1000);

        }
    )

}


async function post() {
    var post = new Promise(
        function (postResponse) {
            setTimeout(function () {
                postResponse("This my 1st post")
            }, 1000);
        }
    );
    //var [feed,comment,like]=await Promise.all(post,commentCode(),likeCode())
    
    console.log(await post)
    console.log(await commentCode())
    console.log(await likeCode())
}
post()

// print at a struch

async function commentCode(){
    return new Promise(
        function(commentValue){
            setTimeout(function () {
                commentValue("This my 1st post's Comment icon")
            }, 1000);

        }
    )

}
async function likeCode(){
    return new Promise(
        function(likeValue){
            setTimeout(function () {
                likeValue("This my 1st post's like icon")
            }, 1000);

        }
    )

}
async function shareCode(){
    return new Promise(
        function(shareValue){
            setTimeout(function () {
                shareValue("This my 1st post's Share icon")
            }, 1000);

        }
    )

}
async function saveCode(){
    return new Promise(
        function(saveValue){
            setTimeout(function () {
                saveValue("This my 1st post's Save icon")
            }, 1000);

        }
    )

}

async function post() {
    var post = new Promise(
        function (postResponse) {
            setTimeout(function () {
                postResponse("This my 1st post in Instagram")
            }, 1000);
        }
    );
    var [feed,comment,like,share,save]=await Promise.all([post,commentCode(),likeCode(),shareCode(),saveCode()])
    
    console.log(feed);
    console.log(comment);
    console.log(like)
    console.log(share)
    console.log(save)
}
post()