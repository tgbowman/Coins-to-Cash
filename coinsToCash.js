/* let quarters = prompt("How many quarters do you have?");
let dimes = prompt("How many dimes do you have?");
let nickels = prompt("How many nickels do you have?");
let pennies = prompt("How many pennies do you have?");
 */




let addButton = document.getElementById("add");

//Capturing user input and storing it into variables


// storing variables in an object piggyBank


//function that takes the properties of piggyBank and calculates the dollar amount.
let addItUp = () => {
    let quartersEl = parseInt(document.getElementById("quarters").value);
    let dimesEl = parseInt(document.getElementById("dimes").value);
    let nickelsEl = parseInt(document.getElementById("nickels").value);
    let penniesEl = parseInt(document.getElementById("pennies").value);

    let piggyBank = {
        "quarters": quartersEl,
        "nickels": nickelsEl,
        "dimes": dimesEl,
        "pennies": penniesEl
    };

    let dollarAmount = 0;

    for (let coin in piggyBank) {
        if (coin === "quarters") {
             dollarAmount += (piggyBank[coin] * .25);
        } else if 
             (coin === "nickels") {
                 dollarAmount += (piggyBank[coin] * .05);
            } else if 
                (coin === "dimes") {
                     dollarAmount += (piggyBank[coin] * .10);
                } else if 
                    (coin === "pennies") {
                         dollarAmount += (piggyBank[coin] * .01);
                    }
                }
                document.write('<h1> You have $' + dollarAmount +'</h1>')
            }
 
addButton.addEventListener("click", addItUp);
        
    

    

