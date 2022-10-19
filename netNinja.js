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



/*
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

//class inheritance
class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var admin = new Admin('shaun@ninjas.com', 'Shaun');
var userOne = new User('luis@ninjas.com', 'luis');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
//'new' keyword creates new empty object{}
//sets value of 'this' to be the new empty object
//calls constructor method

//'return this' each method for method chaining
//userOne.login().updateScore().updateScore().logout();


var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);
console.log(users);
*/



// Constructor function
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

//adding methods to prototype
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

//prototype inheritance
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};


var userOne = new User('luis@ninjas.com', 'luis');
var userTwo = new User('yoshi@mariocorp.com', 'Yoshi');
var admin = new Admin('billy@ninja.com', 'billy');

var users = [userOne, userTwo, admin];

console.log(admin);
