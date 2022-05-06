let myBook = {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    pageCount: 300
}

console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)

myBook.title = 'New Author'
console.log(myBook.title)

//Inline return object
function getSummary(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        noOfPages: `${book.pageCount}`
    }
}

console.log(getSummary(myBook))
console.log(getSummary(myBook).summary)
console.log(getSummary(myBook).noOfPages)