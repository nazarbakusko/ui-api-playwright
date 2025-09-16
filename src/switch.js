const temperature = 24;
const isRaining =  false

let weatherType;

if (temperature > 30 && !isRaining) {
  weatherType = 'hotDry';
} else if (temperature > 20 && temperature <= 30) {
  weatherType = 'warm';
} else if (temperature >= 10 && temperature <= 20) {
  weatherType = 'cool';
} else if (temperature <= 10) {
  weatherType = 'cold';
} else {
  weatherType = 'unknown';
}

// Switch
switch (weatherType) {
case 'hotDry':
  console.log('It\'s hot and dry today — a great day for a walk!');
  break;

case 'warm':
  console.log('It\'s warm, you can go outside, but stay in the shade.');
  break;

case 'cool':
  console.log('It\'s cool, wear a light jacket.');
  break;

case 'cold':
  console.log('It\'s cold! Better stay home or dress warmly.');
  break;

default:
  console.log('Weather conditions are unclear — check the forecast!');
}