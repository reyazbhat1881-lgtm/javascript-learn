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

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Reyaz", email: "reyazbhat1881@gmail.com"})

    }, 1000)
})

promiseThree.then(function(user){
console.log(user);

})

 const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
    resolve({error: "h"})

        } else {
            reject('error: wrong')
        }
    }, 1000)

 })

 promiseFour
 .then((user) => {
     console.log(user);
     return user.username
     
 } )
 .then((username) => {
    console.log(username);
    
 })
 .catch(function(error){
    console.log(error);
    
 }).finally(() => console.log("the promise is resolved or rejected"))
 
