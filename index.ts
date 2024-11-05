// Calculation Method
function calculation(a: number, b: number, method: string): number | string {
    console.log(`First Number=${a} | Second Number=${b}`)

    // Addition
    if (method === "sum") {
        return `Addition of two numbers= ${a + b}`
    }

    // Subtraction Logic
    else if (method === "sub") {
        return `Subtraction of two numbers= ${a - b}`
    }

    // Division Logic
    else if (method === "div") {
        return `Division of two numbers=${a / b}`
    }

    // Multiplication Logic
    else if (method === "mul") {
        return `Multiplication of two numbers ${a * b}`
    }
    else {
        return ("Invalid Operator")
    }
}

// Type alias for operators
type operatorCheck = "sum" | "sub" | "mul" | "div"

let operator: operatorCheck = "sum"
console.log(calculation(2, 3, operator))

// Object Interface 
interface BookModel {
    title: string,
    author: string,
    publishYear: number
}

// Book Details 
function bookEntry(book: BookModel): string {
    console.log(book)
    return ` Title=${book.title}| Author=${book.author}| Publish Year=${book.publishYear}`
}
let book1: BookModel = {
    title: "Money Heist",
    author: "Hassan Raza",
    publishYear: 2020
}
console.log(bookEntry(book1))

// Geners of array 
type arr<T> = T[]
type name<T,U> = {
    title:T,
    name:U
}
let name1: name<string, number> = {
    title:"hello",
    name:121
}
type name2<T>=T
let name3:name2<string>="ali"
let array: arr<string> = ["ali", "ahmad", "hassan"]
console.log(array)