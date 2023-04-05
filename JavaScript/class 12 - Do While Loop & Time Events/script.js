// var userInput = 1;
// var count = 1;
// while(userInput % 3 !== 0){
//     console.log(count++);
//     userInput = +prompt('enter a number');
// }



// var i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }






















// do{
//     console.log('do while loop running');
// }while(false);








// var attempt = 0;
// do{
//     var userNum = +prompt('enter your lucky number');
//     var ranNum = Math.ceil(Math.random() * 2);
//     console.log(userNum, ranNum)
//     attempt++;
// }while(userNum !== ranNum);
// console.log(attempt);













// function salam(fullName){
//     console.log('Assalamualaikum ' + fullName);
// }
// function eidMubarak(fullName){
//     console.log('Eid Mubarak ' + fullName);    
// }

// function greetUser(fName, lName, greetMsg){
//     greetMsg(fName + " " + lName);
// }

// greetUser("Haider", "Ali", salam);

// greetUser('Aslam', "Khan", eidMubarak);




// function getSquareValue(num){
//     return num * num;
// }
// function multiplyBy2(num){
//     return num * 2;
// }

// function calculateHyp(base, perp, findSquare){
//     var hypSquare = findSquare(base) + findSquare(perp);
//     console.log(Math.sqrt(hypSquare));
// }

// calculateHyp(4, 4, getSquareValue);
// calculateHyp(4, 4, multiplyBy2);


























// var h1 = document.querySelectorAll('.msg')[0];
// function greetUser(){
//     h1.innerHTML = 'Welcome to our site!';
// }

// function greetDelayedMsg(){
//     setTimeout(greetUser, 2000);
// }















// var count = 10;
// function printCounter(){
//     console.log(count--);
//     if(count === 0){
//         clearInterval(counting);
//     }
// }
// var counting = setInterval(printCounter, 1000);





















// var m = 0;
// var s = 0;
// function startTimer(){
//     console.log(m + " : " + s);
//     s++;
//     if(s===60){
//         s= 0;
//         m++;
//     }
//     if(m === 2){
//         clearInterval(timerRef);
//     }
// }

// var timerRef = setInterval(startTimer, 100);










// var h1 = document.querySelectorAll('.msg')[0];
// function greetUser(){
//     h1.innerHTML = 'Welcome to our site!';
// }
// var greetMsg;
// function greetDelayedMsg(){
//     greetMsg = setTimeout(greetUser, 5000);
// }









// function checkSeconds(){
//     var seconds = new Date().getSeconds();
//     console.log(seconds);
//     if(seconds % 10 === 0){
//         clearTimeout(greetMsg);
//         clearInterval(checkSecInterval);
//     }
// }
// var checkSecInterval = setInterval(checkSeconds, 1000)










var i = 0;
var iInterval = setInterval(function(){
    console.log(i++);
    if(i === 10){
        clearInterval(iInterval);
    }
}, 1000);












