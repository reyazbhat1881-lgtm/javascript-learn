const promiseNo1 = new Promise (function(resolve, reject){

    setTimeout(function(){
        console.log("Asyln");
        resolve()
        
    }, 1000)
})

promiseNo1.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("async2 resolved");
    
})

 