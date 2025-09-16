const num1 = 10;
const num2 = 5;
const temperature = 24;
const isRaining = false;
const dayOfWeek = 'Saturday';

//if else
if (num1 == num2) {
  console.log('Num1 equals num2');
} else {
  console.log('Num1 not equals to num2');
}

// if-else if-else structure
if (num1 == num2) {
  console.log('Num1 equals num2');
} else if (num1 < num2) {
  console.log('Num2 greater than num1');
} else {
  console.log('Num1 greater than num2');
}

// if-else if-else structure
if (temperature > 30 && !isRaining) {
  console.log('It\'s hot and dry today — a great day for a walk!');
} else if (temperature > 20 && temperature <= 30) {
  console.log('It\'s warm, you can go outside, but stay in the shade.');
} else if (temperature >= 10 && temperature <= 20) {
  console.log('It\'s cool, wear a light jacket.');
} else {
  console.log('It\'s cold! Better stay home or dress warmly.');
}

// Using ternary operator
const weatherMessage = temperature > 25
  ? 'Very warm, wear light clothing.'
  : temperature >= 15
    ? 'Warm, but it might be cool in the shade.'
    : 'Cold, better take a jacket.';

console.log(weatherMessage);

// Combined logic with ternary operator
const planMessage = (temperature > 15 && !isRaining) || dayOfWeek === 'Saturday'
  ? 'Perfect day for a walk!'
  : 'Better stay at home.';

console.log(planMessage);