

function enterMoney(money) {
    console.log("Please enter money");

    if (money <= 0) {
        console.log("Please try again")
    }

    else if (money > 0) {
        console.log("You entered: "+money)
    }

    else {
        
        console.log("Please try again")
    }

}
    enterMoney(5.00)
// Assuming $5 entered
















// var PrintVendingMachine = {
//     Snickers: "$"+1.00,
//     Gushers: "$"+0.50,
//     Gum: "$"+0.25,
//     Potato_Chips: "$"+1.50,
//     Soda: "$"+2.00,
//     Water: "$"+1.00,
// }
// /// Astetic

// console.log(PrintVendingMachine)
// console.log("Here are items and prices")

// console.log("Select items between 1-6")

// var VendingMachineItems = {
//     Item1: "Snickers",
//     Item2: "Gushers",
//     Item3: "Gum",
//     Item4: "Potato_Chips",
//     Item5: "Soda",
//     Item6: "Water"
// }
//     console.log(VendingMachineItems)


//     /// user selects Item 1 and 2

//     console.log("You chose: " + VendingMachineItems.Item1 + " & " + VendingMachineItems.Item2)
