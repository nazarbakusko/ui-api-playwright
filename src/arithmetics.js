const a = 10;
const b = 2;

const c = 'Small';
const d = 'pony';
const e = '6';

const boolTrue = true;
const boolFalse = false;

let undef;

// Same types
function numberNumber() {
  console.log('Add:', a + b);
  console.log('Multiply:', a * b);
  console.log('Divide:', a / b);
  console.log('Deduct:', a - b);
  console.log('Pow:', a ** b);
  console.log('num1 % num2:', a % b);
}

function stringString() {
  console.log('Concat:', c + ' ' + d);
}

function booleanBoolean() {
  console.log('Boolean add (true + false):', boolTrue + boolFalse);
}

numberNumber();
stringString();
booleanBoolean();

//Different types

// str - num
console.log('str - num:', e - b);

// str + num
console.log('str + num:', e + b);

// num + null
console.log('num + null:', a + null);

// num + undef
console.log('num + bool:', a + undef);

// parse
const parsed = Number(e); // або parseInt(strNum1, 10)
console.log('parsed e + a (explicit):', parsed + a);

