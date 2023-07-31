let fruit = 'apple';
console.log("\nIs fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("\nIs fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');

console.log("\nIs fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple');

console.log("\nIs fruit != 'Apple'? I predict True.");
console.log(fruit != 'Apple');

let input = 'OpenAI';
console.log("\nIs input in lower case 'openai'? I predict False.");
console.log(input.toLowerCase() == 'openai');

let x = 10;
let y = 5;

console.log("\nIs x greater than y? I predict True.");
console.log(x > y);

console.log("\nIs x less than or equal to y? I predict False.");
console.log(x <= y);

console.log("\nIs x + y equal to 15? I predict True.");
console.log(x + y == 15);

console.log("\nIs x - y not equal to 5? I predict False.");
console.log(x - y != 5);

let temperature = 25;
let isSunnyDay = true;

console.log("\nIs it a sunny day and the temperature is above 20°C? I predict True.");
console.log(isSunnyDay && temperature > 20);

console.log("\nIs it a sunny day or the temperature is below 15°C? I predict True.");
console.log(isSunnyDay || temperature < 15);

let fruits = ['apple', 'banana', 'orange'];

console.log("\nIs 'apple' in the array? I predict True.");
console.log(fruits.includes('apple'));

console.log("\nIs 'grape' in the array? I predict False.");
console.log(fruits.includes('grape'));

console.log("\nIs 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape'));