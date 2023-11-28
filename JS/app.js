let text = "1.65"               // String         //
let numInt = 2                  // Integer        //
let numFloat = 1.64             // Float          //
let sum = 2 + 6                 // Math Operation //
console.log(typeof(text))
console.log(typeof(numInt))
console.log(sum)

let names = "CJRed"             // String         //
let age = 18                    // Integer        //
let password = "Simelase01"     // Password       //

// Calls //
console.log(names)
console.log(age)
console.log(password)

// Math Operators //
console.log(65 + 43)            // Addition       //   
console.log(65 - 43)            // Substraction   //    
console.log(65 * 3)             // Multiplication //   
console.log(1 / 2)              // Division       //    
console.log(1 % 2)              // Modulation     //   
console.log(2 ** 32)            // Potentiation   //    

// Window //
let user = window.prompt("Tell me your name you foo")

if (user == "CJRed") {
    window.alert("Hello foo," + " " + user)
} else {
    window.alert("Your data has been stolen successfully" + " " + user)
}