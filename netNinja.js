// #1 - Introduction
/*
let names = ['ryu', 'crystal', 'mario'];
names.length // 3

names.sort();
console.log(names);

console.log(window); //window global object

let name2 = new String('ryu'); //string object 
console.log(name2);
*/


// #2 - Object Literals
var userOne = {
    email: 'luis@ninjas.com',
    name: 'Luis',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out')
    }
};

console.log(userOne.name);


// #3 updating properties
userOne.name = 'Yoshi'; 
userOne['name'] = 'mario';

//creating new properties/methods
userOne.age = 25;


//#4 - classes
