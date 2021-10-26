console.log("Bai 1");
let user ={};
user.name="David";
console.log(user);

user.surname="Xuan";
console.log(user);

user.name="Cafedev";
console.log(user);

delete user.name;
console.log(user);
console.log("Bai 2");
function sumCalculator(num1, num2) {
    return num1+num2;    
}
let x=Number(prompt("First Number"));
let y=Number(prompt("Second Number"));
console.log("Sum is",sumCalculator(x,y));

console.log("Bai 3");
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    };

let sum=salaries.John+salaries.Ann+salaries.Pete;
console.log("Tổng lương các nhân viên là:",sum);