const num1 = 10;         
const num2 = 5;            

const str1 = "10";          
const str2 = "Hello";      

const boolTrue = true;      
const boolFalse = false;    

const nul = null;           
let undef;                  

// --- Comparison ---
// Numbers
console.log("num1 > num2:", num1 > num2);   // true
console.log("num1 < num2:", num1 < num2);   // false
console.log("num1 == str1:", num1 == str1); // true ("10" -> int)
console.log("num1 === str1:", num1 === str1); // false (diff types)

// Strings
console.log("str2 == 'Hello':", str2 == "Hello"); // true
console.log("str2 === 'hello':", str2 === "hello"); // false (diff case)

// Null та Undefined
console.log("nul == undef:", nul == undef);   // true (special case JS)
console.log("nul === undef:", nul === undef); // false (diff types)

// --- Logical operators ---
// AND (&&)
console.log("boolTrue && boolFalse:", boolTrue && boolFalse); // false
console.log("num1 > 0 && num2 > 0:", num1 > 0 && num2 > 0);   // true

// OR (||)
console.log("boolTrue || boolFalse:", boolTrue || boolFalse); // true
console.log("num1 < 0 || num2 > 0:", num1 < 0 || num2 > 0);   // true

// NOT (!)
console.log("!boolTrue:", !boolTrue);   // false
console.log("!boolFalse:", !boolFalse); // true

// --- Combined examples ---
console.log("(num1 > num2) && (str2 === 'Hello'):", (num1 > num2) && (str2 === "Hello")); // true
console.log("(num1 < num2) || (str1 === '10'):", (num1 < num2) || (str1 === "10"));       // true
