let mypromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if (true){
            resolve("수신 성공!");
        }
        else{
            reject("수신 실패!");
        }
    }, 2000);
});

mypromise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});