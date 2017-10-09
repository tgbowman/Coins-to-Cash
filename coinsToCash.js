let piggyBank = {
    "quarters": 12,
    "nickels": 24,
    "dimes": 33,
    "pennies": 57
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
                console.log(dollarAmount);
            }

        
    

    

