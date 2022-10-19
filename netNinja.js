//  - Introduction
/*
let names = ['ryu', 'crystal', 'mario'];
names.length // 3

names.sort();
console.log(names);

console.log(window); //window global object

let name2 = new String('ryu'); //string object 
console.log(name2);
*/



//  - Object Literals
/*
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



// updating properties
userOne.name = 'Yoshi'; 
userOne['name'] = 'mario';

//creating new properties/methods
userOne.age = 25;
*/




// - classes
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('luis@ninjas.com', 'luis');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
//'new' keyword creates new empty object{}
//sets value of 'this' to be the new empty object
//calls constructor method

//'return this' each method for method chaining
userOne.login().updateScore().updateScore().logout();




