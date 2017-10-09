let quarters = prompt("How many quarters do you have?");
let dimes = prompt("How many dimes do you have?");
let nickels = prompt("How many nickels do you have?");
let pennies = prompt("How many pennies do you have?");

let piggyBank = {
    "quarters": quarters,
    "nickels": nickels,
    "dimes": dimes,
    "pennies": pennies
};

let addItUp = (object) => {
    let dollarAmount = 0;

    for (let prop in object) {
        if (prop === "quarters") {
             dollarAmount += (object[prop] * .25);
        } else if 
             (prop === "nickels") {
                 dollarAmount += (object[prop] * .05);
            } else if 
                (prop === "dimes") {
                     dollarAmount += (object[prop] * .10);
                } else if 
                    (prop === "pennies") {
                         dollarAmount += (object[prop] * .01);
                    }
                }
                document.write('<h1>You have $' + dollarAmount + '</h1>');
            }
 
addItUp(piggyBank);
        
    

    

