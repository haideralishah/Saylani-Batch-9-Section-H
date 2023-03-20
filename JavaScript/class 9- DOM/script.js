// var p = document.querySelector("p");

// var p = document.querySelectorAll("#cancer");
// var p = document.querySelectorAll("h1");
// var pElements = document.querySelectorAll("p");

// console.log(pElements[1].className);











// var aElements = document.querySelectorAll("a");

// console.log(aElements[1].href);
































// var userNameInput = document.querySelectorAll('#userName')[0];
// var passwordInput = document.querySelectorAll('#password')[0];

// function register(){
//     console.log(userNameInput, passwordInput);
// }



















// var cityName = document.querySelectorAll("#city")[0];
// var province = document.querySelectorAll("#province")[0];

// function completeForm() {
//     var cityNameValue = cityName.value;
//     if (cityNameValue.toLowerCase() === 'karachi') {
//         province.value = 'Sindh';
//     }
//     else if (cityNameValue.toLowerCase() === 'lahore') {
//         province.value = "Punjab";
//     }
//     else if (cityNameValue.toLowerCase() === 'peshawar') {
//         province.value = "KP";
//     }
//     else if (cityNameValue.toLowerCase() === 'quetta') {
//         province.value = "Balochistan";
//     }
//     else if (cityNameValue.toLowerCase() === 'peshawar') {
//         province.value = "KP";
//     }
//     else if (cityNameValue.toLowerCase() === 'gilgit') {
//         province.value = "Gilgit Baltistan";
//     }

// }













// var imgElements = document.querySelectorAll("img")[0];

// function changeImage() {
//     imgElements.src = "./images/after.jpeg";
// }

// function reverseOriginalImage(){
//     imgElements.src = "./images/before.avif";
// }






// var imgElement = document.querySelectorAll('img')[0];
// function tossCoin(userPick) {
//     var ranNum = Math.ceil(Math.random() * 2);
//     if (ranNum === 1) {
//         imgElement.src = "./images/head.jfif";
//     }
//     else if (ranNum === 2) {
//         imgElement.src = "./images/tail.jfif";
//     }

//     if ((userPick === 'head' && ranNum === 1) || (userPick === 'tail' && ranNum === 2)) {
//         console.log("you won the toss");
//     }
//     else {
//         console.log("you loss the toss");
//     }


// }































































var todoInput = document.querySelectorAll(".todo-input")[0];
var ol = document.querySelectorAll('#todo-list')[0]; 

function addTodo(){    
    var newTodo =  todoInput.value;
    ol.innerHTML = ol.innerHTML + "<li>"+ newTodo + "</li>";
    todoInput.value = "";
}










