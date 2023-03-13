// String
// Number
// Boolean

// Array


// var cars = ['civic', 'alto', 'mehran'];

// var car = {
//     name: "civic",
//     model: 2020,
//     isAutumatic: true,
//     color: 'red'
// };

// var civic = {
//     model: 2020,
//     isAutumatic: true,
//     color: ['red', 'black', 'silver']
// }

// civic.fuelMode = 'Hybrid';
// civic.isAutumatic = false;
// console.log(civic);







// var user = {};
// user.name = prompt('what is your name?');
// user.rollNumber = prompt('what is your roll number?');
// user.age = prompt('what is your age?');
// user.hobbies = [];
// for(var i = 0; i < 3; i++){
//     var hobby = prompt('enter 1 hobby');
//     user.hobbies.push(hobby);
//     // user.hobbies[i] = hobby;
// }
// // user.age = 22;
// console.log(user);



var user = {
    pcConfig: {
        ram: {
            companyName: 'kingston',
            memory: '32GB'
        },
        processor: "i7",
        SSD: '1TB',
        graphicsCard: "RTX3018"
    },
    gadgets: ['Gaming laptop', "macbook", 'iPad'],
    name: 'Akram',
    age: 26,
    isMarried: false,
}

console.log(user.gadgets[2]);
user.pcConfig.ram.companyName = 'Samsung';
console.log(user.pcConfig.ram.companyName)







