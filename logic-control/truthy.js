// ******** Falsy Value *****
// ..... false, 0, -0, BigInt , "", null, undefined, NaN



// ******* Truthy Values *******
//.... "0", 'false', " ", [], {}, function(){},


const userEmail = "rt65"

if(userEmail){
    console.log(`Your email is ${userEmail}`);
    
} else {
    console.log("User donot have any email");
    
}

if(userEmail.length === 0){
    console.log("email is empty");
    
}

const obj = {}

if(Object.keys(obj).length === 0) {
    console.log("Empty object");
    
}

