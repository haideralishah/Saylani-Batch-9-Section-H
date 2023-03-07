

// var isMatricPassed = confirm("have you passed matric?");
// var testScore = +prompt('what was your test score?');
// var p = document.querySelector(".msg");
// p.style.color = "#fff";
// p.style.padding = "20px";
// if(isMatricPassed && testScore >= 70){
//     p.innerHTML = "Congrats! You have got the admission.";
//     p.style.backgroundColor = "Green";
// }
// else{
//     p.innerHTML = "Please try again later.";
//     p.style.backgroundColor = "red";
// }



















// var isSaylaniStudent = confirm("Are you already enrolled in Saylani");
// var doYouKnowCoding = confirm('Do you know coding?');
// var pElement = document.querySelector(".msg");
// pElement.style.color = 'white';
// pElement.style.padding = "20px";
// if(isSaylaniStudent || doYouKnowCoding){
//     pElement.innerHTML = "Congrats! You are allowed.";
//     pElement.style.backgroundColor = "green";
// }
// else{
//     pElement.innerHTML = "Sorry! you are not allowed.";
//     pElement.style.backgroundColor = "red";
// }














// var p = document.querySelector(".msg");
// var domecile = prompt('which domecile do you have?');

// if(domecile === 'karachi'){
//     var isEducated = confirm('are you educated?');
//     if(isEducated){
//         p.innerHTML = 'Congrats! you have secured this job.';
//     }
// }
// else{
//     p.innerHTML= "Sorry! you are not eligible.";
// }













































// var students = ['Haider', "abdullah", 'Ahmed'];
// console.log(students[0]);










// var mixedArr = ["haider", 400, true];
// console.log(mixedArr[2]);








// var users = [];

// users[0] = "haider";
// users[1] = "abdullah";
// users[5] = 'ahmed';
// console.log(users);













// var users = ["Ahmed"];
// console.log(users);

// users[0] = prompt('enter student name?');
// users[1] = prompt('enter student name?');;
// users[2] = prompt('enter student name?');;
// console.log(users);

















// var fruit = "apple";
// var fruits = [fruit, 'banana', 'orange'];

// console.log(fruits)





// var cities = ['karachi', 'lahore', 'islamabad'];
// // var msg = "Welcome to " + cities[2];
// // console.log(msg);
// cities[3] = 'peshawar';

// console.log(cities.length);






// var cities = ['karachi', 'lahore'];

// cities.push("islamabad");

// cities.push('peshawar');

// cities.push('quetta');

// console.log(cities);

















// var cities = ['karachi', 'lahore'];

// var userFavCity = prompt("enter your favorite city");

// cities.push(userFavCity);

// console.log(cities);










// var cities = ['karachi', 'lahore'];
// cities.length  //arrey length
// cities.push("islamabad") //adds in last
// cities.unshift('islamabad') // add in begining

// cities.unshift("islamabad");
// cities.push('islmabad', 'quetta', 'peshawar')
// cities.unshift('islmabad', 'quetta', 'peshawar')


// console.log(cities);










// var cities = ['karachi', 'lahore', 'quetta'];
// console.log(cities);

// cities.pop(); //remove last index

// cities.shift(); // remove first index
// console.log(cities);





// var cities = ['karachi','lahore', 'islamabad', 'peshawar', 'quetta'];

// cities.splice(2, 0, "Gilgit");

// console.log(cities);






/*
array.length;
array.push()
array.unshift()

array.pop()
array.shift()

array.splice()

*/










// var fruits = ['apple', 'banana'];
// console.log(fruits);
// var userFavFruit = prompt('what is your favorite fruit?');
// fruits.push(userFavFruit);

// console.log(fruits);






// var fruits = ['apple', 'banana', 'mango', 'pineapple'];

// // fruits.splice(2, 1, "Orange", "Kivi");
// var userFavFruits = prompt('what is your fav fruit?');
// var userUnFavFruitIndx = prompt('what is the index of your un favorite fruit?');

// fruits.splice(userUnFavFruitIndx, 1, userFavFruits);

// console.log(fruits);






























// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'orange', 'kivi'];

// var specialFruits = fruits.slice(1, 4);


// console.log(specialFruits,fruits);


























//loop
/*
starting point
ending point
any change

after qualification
new learning
course completion








*/







// for(var i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log('loop completed');







// var fruits = ['apple', 'banana', 'orange'];
// for(var i =0; i < 3; i++){
//     console.log(fruits[i]);
// }


















// for(var i = 1; i <= 100; i++){
//     console.log(i);
// }











 
// for(var i = 100; i > 0; i--){
//     console.log(i);
// }



// for(var i = 0; i <= 20; i = i + 2){
//     console.log(i);
// }






// var start = +prompt('where to start from?');
// var end = +prompt('where to end loop?');

// for(var i = start; i <= end; i++){
//     console.log(i);
// }














// for(var i = 0; i < 10; i++){
//     console.log(i);
// }



// var tableName = +prompt('enter a table number');
// var end = +prompt('where you want to stop table');
// //2 x 1 = 2
// for(var i = 1; i <= end; i++){
//     console.log(tableName + " x " + i + ' = ' + tableName * i);
// }
























// var p = document.querySelector('.mobile-brands')
// var mobiles = ['Nokia','Samsung', 'Apple', 'Sony', "Q-Mobile"];

// for(var i = 0; i < mobiles.length; i++){
//     p.innerHTML = p.innerHTML +  mobiles[i] + "<br />" ;
// }










// var p = document.querySelector('.mobile-brands');
// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'orange', 'kivi'];

// for(var i = 0; i < fruits.length; i++){
//     p.innerHTML = p.innerHTML + fruits[i] + "<br />";
// }











// var arraySize = +prompt('enter array size');
// var favFruits = [];
// for(var i = 0; i < arraySize; i++){
//     var userInput = prompt('what is your favorite fruit?');
//     // favFruits.push(userInput);
//     favFruits[i] = userInput;
// }
// console.log(favFruits);





























// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'orange', 'kivi'];
// var favFruit = prompt('what is your fav fruit?');

// for(var i = 0; i< fruits.length; i++){
//     if(fruits[i] === favFruit){
//         console.log('favorite fruit found in inventory.');
//         break;
//     }
// }














// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'orange', 'kivi'];
// var favFruit = prompt('what is your fav fruit?');

// if(fruits.includes(favFruit)){
//     console.log('Favorite fruit found in inventory.');
// }
// else{
//     console.log('Fruit not found.')
// }













// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'orange', 'kivi'];
// var favFruit = prompt('what is your fav fruit?');

// if(fruits.includes(favFruit)){
//     console.log('Favorite fruit found in inventory at index number ' + fruits.indexOf(favFruit));
// }
// else{
//     console.log('Fruit not found.')
// }







var p = document.querySelector(".mobile-brands")
for(var i = 0; i< 4; i++){
    p.innerHTML = p.innerHTML + "*****" + "<br />"
}





