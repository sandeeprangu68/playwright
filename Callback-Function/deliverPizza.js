// The delivery guy
function deliverPizza(callCustomerWhenArrived) {
    callCustomerWhenArrived();
    console.log("Pizza is being prepared... 🍕");
    console.log("Pizza is out for delivery... 🛵");
    console.log("Delivery guy arrived at your door!");

   // He calls you NOW
                               // He has no idea what you will do
                               // That's YOUR job to define
}


// YOU decide what happens when he calls
// deliverPizza(() => {
//     console.log("Customer: Coming down in 2 minutes!");
//     console.log("Customer: Opens door, takes pizza 🍕");
//     console.log("Customer: Pays cash 💵");
// });
// deliverPizza(() => {
//     console.log("Customer2: Coming down in 2 minutes!");
//     console.log("Customer2: Opens door, takes pizza 🍕");
//     console.log("Customer2: Pays cash 💵");
// });