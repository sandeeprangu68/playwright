const { test } = require('@playwright/test');
async ({ page }) => {


    //A variable is a container to store data
    //let name = "Sandeep";
    // let   → changeable variable
    // const → constant (cannot be reassigned)

    // Rule 1: Let can be reassigned
    // let age = 25;
    // age = 30;
    //console.log(age); // 30


    // Rule 2: Block Scoped ⭐
    // if (true) {
    //     let x = 10;
    // }
    // console.log(x);

    // Rule 3: Cannot redeclare let in same scope
    // let a = 10;
    // let a = 20; // ❌ Error

👉 //let works only inside { }

    // Rule 4: Can declare let without value
    // let city;
    // city = "Hyderabad";



    const url = "https://tutorialsninja.com/demo/index.php?route=account/login"; // constant
    await page.goto(url);

    //const password;
    let username;
    username = "user1";
    username = "user2";

    await page.fill('#input-email', username);
    await page.waitForTimeout(5000);

});