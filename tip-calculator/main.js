"use strict"
//Selecting the elements

const bill = document.querySelector("#bill");
const services = document.querySelector("#services");
const people = document.querySelector("#people");
const button = document.querySelector("#calc-button");
const amount = document.querySelector("#tip-amount");
const each = document.querySelector("#each");
let total;

//Event listener for the button click
button.addEventListener("click", calculateTips);

//Function that calculates the tips for each service selection
function calculateTips() {
    //Checks if some of the fields is blank
    if (bill.value === "" || services.value === "choose-option" || people.value === "") {
        alert("You need to fill in all the fields!");
        //Changes the tip value for each percentage
    } else {
        switch (services.value) {
            case "outstanding":
                onePerson();
                total = (bill.value * 0.30) / people.value;
                amount.innerHTML = `€ ${total}`;
                break;
            case "good":
                onePerson();
                total = (bill.value * 0.20) / people.value;
                amount.innerHTML = `€ ${total}`;
                break;
            case "ok":
                onePerson();
                total = (bill.value * 0.15) / people.value;
                amount.innerHTML = `€ ${total}`;
                break;
            case "bad":
                onePerson();
                total = (bill.value * 0.1) / people.value;
                amount.innerHTML = `€ ${total}`;
                break;
            case "terrible":
                onePerson();
                total = (bill.value * 0.05) / people.value;
                amount.innerHTML = `€ ${total}`;
                break;
        }
    }
}

//Function that checks if there is more than one person that pays the bill and adds or deletes the "each"
function onePerson() {
    if (parseInt(people.value) === 1) {
        each.innerHTML = "";
    } else {
        each.innerHTML = "each";
    }
}
