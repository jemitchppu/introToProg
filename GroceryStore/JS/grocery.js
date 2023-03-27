const prompt=require("prompt-sync")({sigint:true}); 

var uName = ["Joemama"];
var pWord = ["joe"];



try {
    const account = prompt("Do you have an account? (Y/N):");

    if (account === "Y") {
        Login();
    } else if (account === "N") {
        Create();
    } else {
        err;
    }
}
catch (err) {
   throw("Sorry your answer did not meet the required format, please try again.");
}





function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}

function Login(){
    const username = prompt("Please enter username:");
        if (uName.includes(username)){
            const password = prompt("Please enter your password:");
                if(pWord.includes(password)){
                    Shop();
                } else {
                    console.log("Password Incorrect");
                    Login();
                }
        } else {
            console.log("Username Incorrect");
            Login();
    }
}

function Create(){
    const fName = prompt("Please enter first name:");
    const lName = prompt("Please enter last name:");
    const address = prompt("Please enter address:");
    const city = prompt("Please enter city:");
    const state = prompt("Please enter state:");
    const zip = prompt("Please enter ZipCode:");
    uName.push(prompt("Please create a username:"));
    pWord.push(prompt("Please create a password:"));
    Login();
}

function Shop() {
    try{
    var pickDeliv = prompt("Would you like pick-up or delivery? (P/D):");
    if (pickDeliv === "D") {
        var strawberry = prompt("How many pounds of strawberries would you like ($2.99/lb):");
        var spinach = prompt("How many pounds of spinach would you like ($1.99/lb):");
        var kale = prompt("How many pounds of kale would you like ($2.99/lb):");
        var peaches = prompt("How many pounds of peaches would you like ($0.99/lb):");
        var pears = prompt("How many pounds of pears would you like ($1.29/lb):");
        var nectarines = prompt("How many pounds of nectarines would you like ($1.99/lb):");
        var apples = prompt("How many pounds of apples would you like ($0.99/lb):");
        var grapes = prompt("How many pounds of grapes would you like ($1.49/lb):");
        var peppers = prompt("How many pounds of peppers would you like ($1.99/lb):");
        var cherries = prompt("How many pounds of cherries would you like ($2.99/lb):");
        var blueberries = prompt("How many pounds of blueberries would you like ($3.99/lb):");
        var greenbeans = prompt("How many pounds of green beans would you like ($0.99/lb):");
        console.log("Here is what you ordered:")
        console.log("Strawberries: " + strawberry + " lbs costing $" + (strawberry*2.99));
        console.log("Spinach: " + spinach + " lbs costing $" + (spinach*1.99));
        console.log("Kale: " + kale + " lbs costing $" + (kale*2.99));
        console.log("Peaches: " + peaches + " lbs costing $" + (peaches*0.99));
        console.log("Pears: " + pears + " lbs costing $" + (pears*1.29));
        console.log("Nectarines: " + nectarines + " lbs costing $" + (nectarines*1.99));
        console.log("Apples: " + apples + " lbs costing $" + (apples*0.99));
        console.log("Grapes: " + grapes + " lbs costing $" + (grapes*1.49));
        console.log("Peppers: " + peppers + " lbs costing $" + (peppers*1.99));
        console.log("Cherries: " + cherries + " lbs costing $" + (cherries*2.99));
        console.log("Blueberries: " + blueberries + " lbs costing $" + (blueberries*3.99));
        console.log("Greenbeans: " + greenbeans + " lbs costing $" + (greenbeans*0.99));
        console.log("");
        var total = roundTo((((strawberry*2.99)+(spinach*1.99)+(kale*2.99)+(peaches*0.99)+(pears*1.29)+(nectarines*1.99)+(apples*0.99)+(grapes*1.49)+(peppers*1.99)+(cherries*2.99)+(blueberries*3.99)+(greenbeans*0.99))*1.07),2);
        console.log("Your total comes to: $" + total + " after tax plus a delivery fee of $9.99. This brings it to a grand total of $" + roundTo((total + 9.99),2));
        console.log("Your delivery will be ready in 2 hour(s).");


    } else if(pickDeliv === "P") {
        var strawberry = prompt("How many pounds of strawberries would you like ($2.99/lb):");
        var spinach = prompt("How many pounds of spinach would you like ($1.99/lb):");
        var kale = prompt("How many pounds of kale would you like ($2.99/lb):");
        var peaches = prompt("How many pounds of peaches would you like ($0.99/lb):");
        var pears = prompt("How many pounds of pears would you like ($1.29/lb):");
        var nectarines = prompt("How many pounds of nectarines would you like ($1.99/lb):");
        var apples = prompt("How many pounds of apples would you like ($0.99/lb):");
        var grapes = prompt("How many pounds of grapes would you like ($1.49/lb):");
        var peppers = prompt("How many pounds of peppers would you like ($1.99/lb):");
        var cherries = prompt("How many pounds of cherries would you like ($2.99/lb):");
        var blueberries = prompt("How many pounds of blueberries would you like ($3.99/lb):");
        var greenbeans = prompt("How many pounds of green beans would you like ($0.99/lb):");
        var fish = prompt("How many pounds of fish would you like ($2.99/lb):");
        var pork = prompt("How many pounds of pork would you like ($4.99/lb):");
        var beef = prompt("How many pounds of beef would you like ($6.99/lb):");
        var chicken = prompt("How many pounds of chicken would you like ($3.99/lb):");
        console.log("Here is what you ordered:")
        console.log("Strawberries: " + strawberry + " lbs costing $" + (strawberry*2.99));
        console.log("Spinach: " + spinach + " lbs costing $" + (spinach*1.99));
        console.log("Kale: " + kale + " lbs costing $" + (kale*2.99));
        console.log("Peaches: " + peaches + " lbs costing $" + (peaches*0.99));
        console.log("Pears: " + pears + " lbs costing $" + (pears*1.29));
        console.log("Nectarines: " + nectarines + " lbs costing $" + (nectarines*1.99));
        console.log("Apples: " + apples + " lbs costing $" + (apples*0.99));
        console.log("Grapes: " + grapes + " lbs costing $" + (grapes*1.49));
        console.log("Peppers: " + peppers + " lbs costing $" + (peppers*1.99));
        console.log("Cherries: " + cherries + " lbs costing $" + (cherries*2.99));
        console.log("Blueberries: " + blueberries + " lbs costing $" + (blueberries*3.99));
        console.log("Greenbeans: " + greenbeans + " lbs costing $" + (greenbeans*0.99));
        console.log("Fish: " + fish + " lbs costing $" + (fish*2.99));
        console.log("Pork: " + pork + " lbs costing $" + (pork*4.99));
        console.log("Beef: " + beef + " lbs costing $" + (beef*6.99));
        console.log("Chicken: " + chicken + " lbs costing $" + (chicken*3.99));
        console.log("");
        var total = roundTo((((strawberry*2.99)+(spinach*1.99)+(kale*2.99)+(peaches*0.99)+(pears*1.29)+(nectarines*1.99)+(apples*0.99)+(grapes*1.49)+(peppers*1.99)+(cherries*2.99)+(blueberries*3.99)+(greenbeans*0.99)+(fish*2.99)+(pork*4.99)+(beef*6.99)+(chicken*3.99))*1.07),2);
        console.log("Your total comes to: $" + total + " after tax.");
        console.log("Your pickup will be ready in 1 hour.");
    }
    else{
        err;
    }
}
catch (err) {
    throw("Sorry your answer did not meet the required format, please try again.");
}
}
