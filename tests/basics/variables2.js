

let username;
username = "user1";
username="user2";

console.log(username);

const password = "password123";
//password = "password456"; const cannot be reassigned

if (true) {
    const x = 10;
    console.log(x);
}
//console.log(x); // ❌ Error

const arr = [1, 2, 3];

arr.push(4); // ✅ Allowed
arr.push("test");
arr.push(null);
arr.push(undefined);
arr.push();
console.log(arr); // [1,2,3,4]

const user = { name: "John" };

user.name = "Mike"; // ✅ Allowed
console.log(user.name); // Mike
//user = {};


const baseURL = "https://example.com"; // constant


let count = 0; // changes
count++;
console.log(count);




