// // class function object example
//
// class loginPage {
//      login() {
//         console.log("Login");
//     };
// }
//
// const obj = new loginPage();
// obj.login();	//Login
//
// //Normal function
//
// function login() {
//     console.log("Login");
// }
//
// login();
//
// //Function Expression
//
// const login1 = function(){
//     console.log("Login1");
// }
//
// console.log(login1);
//
// //Arrow Function
//
// const login2 = () => {
//     console.log("Login2 Arrow Function");
// }
//
// login2();
//
// //one line arrow function
//
// const add = (a,b) => {(a+b)};
//
// //Method Inside Object
//
// const user ={
//     login5: function (){
//         console.log("user login5");
//     }
// }
//
// console.log(user.login5());



//Constructer

// function Person(name){
//     this.name = name;
//     //return name;
// }
// const p = new Person("John");
// console.log(p.name);

//Arrow Funcn
//
// const Person = (name) => {
//     this.name = name;
// }
//
// const p =new Person("John");
// console.log(p.name);
//
// class login6 {
//     constructor(name) {
//         this.name = name;
//     }
// }

class car {
    constructor(brand) {
        this.brand = brand;
    }
}

const c1 = new car("BMW");
console.log(c1);