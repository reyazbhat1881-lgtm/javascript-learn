// ****** Reduce  ******

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, curval) {

//     console.log(`acc: ${acc} and curval ${curval}`);
    
//     return acc + curval
// }, 1)

const myTotal = myNums.reduce((acc, curval) => acc+curval, 0)

// console.log(myTotal);


const shoppingCart = [
    { courseName: 'java', coursePrise: 7787, courseAutor: 'Reyaz'},
    { courseName: 'cpp', coursePrise: 8999, courseAutor: 'Reyaz'},
    { courseName: 'html', coursePrise: 2383, courseAutor: 'Reyaz'},
    { courseName: 'c#', coursePrise: 4000, courseAutor: 'Reyaz'}

]

const detail = shoppingCart.reduce((acc, course) => acc + course.coursePrise, 0)

console.log(detail);
