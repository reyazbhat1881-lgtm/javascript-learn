// const coding =  ['js', 'ruby', 'java', 'python', 'cpp']

// const val = coding.forEach( (item) => {

//     console.log(item);
    
// } )

// console.log(val);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter((num) => num > 4 )

// console.log(newNums);

const books = [ 
  { bookName: 'java', bookPrice: 100, bookAuthor: "Reyaz", bookRelease: 2000 },
  { bookName: 'cpp', bookPrice: 250, bookAuthor: "Reyaz", bookRelease: 2010 },
  { bookName: 'love', bookPrice: 500, bookAuthor: "Tufial", bookRelease: 2008 },
  { bookName: 'cold war', bookPrice: 50, bookAuthor: "Burhan", bookRelease: 2020 },
  { bookName: 'aliens on earth', bookPrice: 100, bookAuthor: "Tufail", bookRelease: 2002 },
  { bookName: 'hello papa', bookPrice: 150, bookAuthor: "Burhan", bookRelease: 2001 },
  { bookName: 'ethics of programming', bookPrice: 300, bookAuthor: "Reyaz", bookRelease: 2005 }
];

// const bookDetail = books.filter(book => book.bookPrice > 200);

const bookDetail = books.filter((book) => book.bookRelease > 2005)

console.log(bookDetail);

