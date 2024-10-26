// Question no 01
// function showDateTime() {
//     document.write(new Date());
// }
// showDateTime();

// Question no 02
// function greetUser(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName + "!");
// }

// Question no 03
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
//  console.log(addNumbers(5, 7)); // Output: 12
//  console.log(addNumbers(10, 7)); //  Output: 17


//Question no 04
// function calculator(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         case '%':
//             result = num1 % num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }
//     console.log("The result is: " + result);
// }
// calculator(10, 2, '+'); // Output: The result is: 12
// calculator(10, 2, '-'); // Output: The result is: 8
// calculator(10, 2, '*'); // Output: The result is: 20
// calculator(10, 2, '/'); // Output: The result is: 5
// calculator(10, 2, '%'); // Output: The result is: 0


// Question no 05
// function square(num) {
//     return num * num;
// }
// console.log(square(5)); // Output: 25
// console.log(square(10));  // Output: 100



// Question no 06
// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120
// console.log(factorial(3)); //  Output: 6


// Question no 07
// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }
// displayCounting(1, 10); 
// displayCounting(5, 10); 
// displayCounting(1, 100); 


// Question no 08
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));

// }
// console.log(calculateHypotenuse(3, 4)); // Output: 5
// console.log(calculateHypotenuse(5, 12)); // Output: 13
// console.log(calculateHypotenuse(8, 15)); // Output: 17






// Question no 09
// function calculateRectangleArea(width, height) {
//     return width * height;
// }
// console.log(calculateRectangleArea(20,60));  // Output: 1200
// console.log(calculateRectangleArea(10, 50));   // Output: 500
// console.log(calculateRectangleArea(5, 10)); // Output: 50


// Question no 10
// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome('madam')); // Output: true
// console.log(isPalindrome('hello')); // Output: false
// console.log(isPalindrome('12321')); // Output: true
// console.log(isPalindrome('123456')); // Output: false

// Question no 11
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//  Question no 12

// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = "";
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("I am a programmer")); // Output: programmer

// //  Question no 13

// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccurrences("Hello, World!", "o")); // Output: 2

// // Question no 14
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area);
// }
// calcCircumference(5);


