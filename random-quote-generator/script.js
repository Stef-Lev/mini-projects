"use strict"
//Creating array with quotes
const quotes = [
    "Science is nothing but perception",
    "The greatest wealth is to live content with little",
    "Success is sweet but the secret is sweat",
    "Every day is a good start",
    "Learning never exhausts the mind",
    "Work to become, not to acquire",
    "Independence is happiness"
];
//Selecting button and quote text
let button = document.querySelector(".new-quote");
let quoteText = document.querySelector("#quote");

//Function that returns a random quote from the array above
function returnQuote() {
    quoteText.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
//Returning a random quote when the button is clicked
button.addEventListener("click", returnQuote);