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