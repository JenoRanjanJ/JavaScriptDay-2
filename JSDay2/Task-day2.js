
// js14
let product1 = 10.50;
let product2 = 25.30;
let product3 = 15.20;


let totalPrice = product1 + product2 + product3;

console.log("The total price of 3 products is: $" + totalPrice);

// js15
let number = 7;


if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// js16
let apple = 1;

while (apple <= 10) {
  console.log(apple);
  apple++;
}

// js17

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// js18
let string1 = "hello";
let string2 = "hello";

console.log(string1 == string2);   
console.log(string1 === string2);  

// js19

let email = "user@example.com";
let password = "mypassword123";

if (email !== "" && password !== "") {
  console.log("Login successful!");
} else {
  console.log("Please enter a valid email and password.");
}

// js20
let walletBalance = 100; 


walletBalance += 50; 

console.log("Updated Wallet Balance: " + walletBalance);

// js21
let productStock = 5; 


let availability = productStock > 0 ? "Product is available in stock" : "Product is out of stock";

console.log(availability);

// js22
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num1 + " is not greater than " + num2);
}

// js23
let cartTotal = 60; 
let discount = 0; 
let discountRate = 0.1; 


if (cartTotal > 50) {
    
    discount = cartTotal * discountRate;
    cartTotal = cartTotal - discount; 
    console.log("Discount applied! New total: $" + cartTotal);
} else {
    console.log("No discount applied. Total: $" + cartTotal);
}

// js24
let emailid = "user@example.com"; 
let phoneNumber = "123-456-7890"; 
let input = "user@example.com"; 


if (input === emailid || input === phoneNumber) {
    console.log("Login successful!");
} else {
    console.log("Login failed. Invalid email or phone number.");
}

// js25
let itemsInCart = 2; 
let pricePerItem = 20; 
let totalPriceitem = 0;


if (itemsInCart >= 2 && itemsInCart % 2 === 0) {
    totalPriceitem = (itemsInCart / 2) * pricePerItem; 
    console.log("Total Price with Buy 1 Get 1 Free offer: $" + totalPriceitem);
} else {
    totalPriceitem = itemsInCart * pricePerItem; 
    console.log("Total Price without any offer: $" + totalPriceitem);
}

// js26
let year = 2024; 


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
