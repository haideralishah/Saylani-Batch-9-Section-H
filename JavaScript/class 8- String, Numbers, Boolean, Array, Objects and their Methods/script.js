/*
Array Methods
=============

array.push();

array.pop();

array.unshift();

array.shift();

array.splice();

array.slice();

array.length;

array.includes();

array.indexOf();

array.join();

array.reverse();

*/


// var userNameArr = ["Haider", "Ali", "Shah"];

// var userName = userNameArr.join(" ");

// console.log(userName);












/*
String Methods
=============
string.toUpperCase();

string.toLowerCase();

string.length;

string.slice();

*/


// var userName = 'The quick brown, fox jumps, over the, lazy dog.';

// var splitUserName = userName.split(" ");

// console.log(splitUserName);


// var str = "the-quick-brown-fox-jumps-over-the-lazy-dog.";
// str = str.split('-').join(" ");

// str = str.split('-')
// str = str.join(" ");

// console.log(str);




// var fruits = ['apple', 'banana', 'orange'];

// fruits.reverse();

// console.log(fruits);



var p = document.querySelector(".message");

function checkPalindrome(){
    var userInput = prompt('enter any word');
    var userInputClone = userInput.slice(0);
    userInputClone = userInputClone.split("")
    userInputClone = userInputClone.reverse().join("");

    if(userInput === userInputClone){
        p.innerHTML = userInput + " and " + userInputClone  + ' are palindrome'
    }
    else{
        p.innerHTML = userInput + " and " + userInputClone  + ' are not palindrome'
    }
}









