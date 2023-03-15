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

string.replace();

string.split();

*/



/*
Numbrer Methods
=============
Math.round();
Math.ceil();
Math.floor();
Math.random();

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



// var p = document.querySelector(".message");

// function checkPalindrome(){
//     var userInput = prompt('enter any word');
//     var userInputClone = userInput.slice(0);
//     userInputClone = userInputClone.split("")
//     userInputClone = userInputClone.reverse().join("");

//     if(userInput === userInputClone){
//         p.innerHTML = userInput + " and " + userInputClone  + ' are palindrome'
//     }
//     else{
//         p.innerHTML = userInput + " and " + userInputClone  + ' are not palindrome'
//     }
// }















// var para = "Lorem ipsum dolor World War II sit amet consectetur World War II adipisicing World War II elit."
// var replacedWord = "the second world war";
// for(var i = 0; i < para.length; i++){ 
//     var onCheckWord = para.slice(i, i + 12);

//     if(onCheckWord === "World War II"){
//         para = para.slice(0, i) + replacedWord + para.slice(i + 12);
//        console.log(para);
//     }
// }










// var text = "Lorem ipsum dolor World War II sit amet consectetur World War II adipisicing World War II elit."
// var firstChar = text.indexOf("World War II");

// if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// console.log(text);




















// var para = "Lorem ipsum dolor World War II sit amet consectetur World War II adipisicing World War II elit."
// var newWord = "the second world war";

// para = para.replace(/World War II/g, newWord);

// console.log(para);


/*
Home Excercise

Note: Do not use split reverse join and replace methods

Example:
The-Quick-Brown
customSplit(str, seperator)
str.split("-")

1. split a string
2. reverse an array
3. join an array
4. replace any word from large string

*/



































// var num = 2.5849;
// num = Math.round(num);
// console.log(num);




// var num = 100.2;
// num = Math.ceil(num);
// console.log(num);








// var num = 100.9;
// num = Math.floor(num);
// console.log(num);







// var num = 100.9;
// num = Math.floor(num);
// console.log(num);






// var num = -10.9; 
// num = Math.floor(num);
// console.log(num);













// var num = -2.9; 
// num = Math.ceil(num);
// console.log(num);









// var ranNum = Math.random();
// console.log(ranNum);










// var ranNum = Math.ceil(Math.random() * 2 );
// console.log(ranNum);

// if(ranNum === 1 ){
//     console.log('it is head');
// }
// else{
//     console.log('it is tail');
// }




















