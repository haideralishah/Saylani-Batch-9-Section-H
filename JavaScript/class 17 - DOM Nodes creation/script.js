// var div = document.querySelectorAll('.special')[0];

// div.innerHTML= "<h3>Hello World</h3>";
/*
    document.createElemnt();

    document.createTextNode();

    parent.appendChild(childNode)

*/

// var h3Node = document.createElement("h3");
// var h3Textnode = document.createTextNode("Hello World");

// h3Node.appendChild(h3Textnode);
// div.appendChild(h3Node);
// console.log(h3Node);







































































// var divElement = document.querySelectorAll('.special')[0];
// // divElement.innerHTML = "<h2>I love Pakistan.</h2>";

// var pElement = document.createElement("P");
// var textNode = document.createTextNode('I love Pakistan.');
// pElement.appendChild(textNode)
// console.log(pElement);
// pElement.setAttribute('style', "font-size: 40px; border: 1px dotted black;")
// divElement.appendChild(pElement)




















































// var firstName = "haider";
// var lastName = 'ali';
// var fullName = firstName + " " + lastName;

// var longPara = "the quick brown fox
// jumps over the lazy dog"



// var longPara = `The quick brown
// fox jumps over the lazy
// dog.`;
// console.log(longPara);


// var firstName = `haider`;
// var lastName = `ali`;

// var fullName = `${firstName} ${lastName}`;
// // var oldGreet = "Assalamualaikum " + fullName + ". kese hn ap?";
// var newGreet = `Assalamualaikum ${fullName}.
// kese hn ap?`;
// console.log(newGreet)
























































// var divElement = document.querySelectorAll('.special')[0];
// var disName = prompt('which dis... information you need?')

// var textContent = `<p>${disName.toUpperCase()} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero recusandae assumenda eos consectetur
// dignissimos, inventore error fugiat aperiam enim fuga, exercitationem quos ipsa iste minima! Accusamus omnis
// veritatis itaque?</p>

// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero recusandae assumenda eos consectetur
// dignissimos, inventore ${disName.toUpperCase()} error fugiat aperiam enim fuga, exercitationem quos ipsa iste minima! Accusamus omnis
// veritatis itaque?</p>

// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero recusandae assumenda eos consectetur
// dignissimos,  inventore error fugiat aperiam enim fuga, exercitationem quos ipsa iste minima! Accusamus omnis
// veritatis itaque ${disName.toUpperCase()}</p>`


// divElement.innerHTML = textContent;















/*
add todo item in last with DOM methods and backtick string
*/
// var newTodoInput = document.querySelectorAll('#new-todo')[0];
// var todoList = document.querySelectorAll('#all-todos')[0];
// function addNewTodo(){
//     // cretElmntWdDOMMthds();
//     cretElmntWdString();
// }

// function cretElmntWdDOMMthds(){
//     var li = document.createElement("LI");
//     var newTodo = document.createTextNode(newTodoInput.value);
//     li.appendChild(newTodo);
//     todoList.appendChild(li);
//     newTodoInput.value = "";
// }


// function cretElmntWdString(){
//     todoList.innerHTML += `<li>${newTodoInput.value}</li>`;
//     newTodoInput.value = "";
// }

















































































// /*
//     add new item in begining of the list
//     parentNode.insertBefore(newElement, targetElement)
// */
// var newTodoInput = document.querySelectorAll('#new-todo')[0];
// var todoList = document.querySelectorAll('#all-todos')[0];
// function addNewTodo(){
//     // cretElmntWdDOMMthds();
//     cretElmntWdString();
// }

// function cretElmntWdDOMMthds(){
//     var liElement = document.createElement("LI");
//     var newTodo = document.createTextNode(newTodoInput.value);
//     liElement.appendChild(newTodo);
//     // parentNode.insertBefore(newElement, targetElement)
//     todoList.insertBefore(liElement, todoList.firstChild)
//     newTodoInput.value = ""; 
// }


// function cretElmntWdString(){
//     todoList.innerHTML = `<li>${newTodoInput.value}</li>${todoList.innerHTML}`;
//     newTodoInput.value = "";
// }



















































/*
    delete an item from the list
    parent.removeChild(childToRemove)
*/
// var newTodoInput = document.querySelectorAll('#new-todo')[0];
// var todoList = document.querySelectorAll('#all-todos')[0];
// function addNewTodo(){
//     cretElmntWdDOMMthds();
//     // cretElmntWdString();
// }

// function cretElmntWdDOMMthds(){
//     var liElement = document.createElement("LI");
//     var newTodo = document.createTextNode(newTodoInput.value);
//     liElement.appendChild(newTodo);

//     var delBtn = document.createElement('BUTTON');
//     var delBtnText = document.createTextNode("Delete");
//     delBtn.appendChild(delBtnText);
//     delBtn.setAttribute('onclick', 'deleteTodo(this)')
    
//     liElement.appendChild(delBtn);

//     todoList.appendChild(liElement);
//     newTodoInput.value = ""; 
// }


// function cretElmntWdString(){
//     todoList.innerHTML = `<li>${newTodoInput.value}</li>${todoList.innerHTML}`;
//     newTodoInput.value = "";
// }



// function deleteTodo(elementToDelete){    
//     // parent.removeChild(childToRemove)
//     todoList.removeChild(elementToDelete.parentNode)
// }
















