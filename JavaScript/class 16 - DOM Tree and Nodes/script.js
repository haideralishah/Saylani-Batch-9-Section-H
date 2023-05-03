


// var elmentNodes = document.childNodes[1].childNodes[2].childNodes[1];

// console.log(elmentNodes);



/*
nodeType = 1 elementNode || 3 textNode
nodeValue = ""
nodeName = "P"

*/

// var div = document.querySelectorAll('div')[0];

// console.log(div.childNodes[1].childNodes[1].childNodes[0]);


























/*
parentNode
firstChild
lastChild
nextSibling
previousSibling
*/



// var p = document.querySelectorAll('p')[0];
// p.parentNode.style.border = "1px dashed red";
// p.parentNode.style.padding = "20px";
// p.parentNode.style.backgroundColor = "#fff";

// p.parentNode.parentNode.style.backgroundColor = "pink";
// p.parentNode.parentNode.style.padding = "20px";
// console.log(p)











// var div2 = document.querySelectorAll('#div2')[0];
// div2.firstChild.nextSibling.style.fontSize = "32px";
// console.log(div2.firstChild.nextSibling);


// CRUD
// // create read update delete









































// var div2 = document.querySelectorAll('#div2')[0];

// function changeTargetElement(targetChild, updatedContent){
//     var divChildList = div2.childNodes;
//     var childCount = 0;
//     for(var i = 0; i < divChildList.length; i++){
//         if(divChildList[i].nodeType=== 1){
//             childCount++;
//             if(childCount === targetChild){
//                 divChildList[i].innerHTML = updatedContent;
//             }
//         }
//     }
//     console.log(childCount);
// }

// changeTargetElement(2, "Karachi");

// changeTargetElement(3, "Larkana");

// changeTargetElement(1, "Moenjo Daro");
// document.getElementById();
// document.getElementsByClassName(); // list
// document.getElementsByTagName();
// document.querySelectorAll();

// parent.childNodes[];


// element.parentNode.parentNode;


// var p = document.querySelector("#special");
// p.nextSibling;
// p.previousSibling; 



































// var div2 = document.querySelectorAll("#div2")[0];
// var div2ChildList = div2.childNodes;
// var allP = 0;
// for (var i = 0; i < div2ChildList.length; i++) {
//     if(div2ChildList[i].nodeType === 1 &&
//        div2ChildList[i].nodeName === "P"){
//         allP++;
//         // allP = allP + 1;
//         // allP += 1;
//     }

// }

// console.log(allP);






































/*
class=""
href=""

element.hasAttribute("title"); // true | false
element.getAttribute("id"); // container-1
element.setAttribute("href", "https://www.google.com");

*/


// var div2 = document.querySelectorAll("#div2")[0];
// console.log(div2.childNodes[1].hasAttribute('id'));
// console.log(div2.childNodes[1].getAttribute('id'));
// console.log(div2.childNodes[3].getAttribute('class'));

// div2.childNodes[11].setAttribute("onclick", "greetMe()");
// div2.childNodes[9].setAttribute("href", "https://www.youtube.com/c/JSGURU");
// div2.childNodes[9].setAttribute("target", "_blank");

// function greetMe(){
//     alert('Assalamualaikum');
// }



























// var div2 = document.querySelectorAll("#div2")[0];

// console.log(div2.childNodes[11].attributes[2].nodeName);
// console.log(div2.childNodes[11].attributes[2].nodeValue);
// console.log(div2.childNodes[11].attributes[2]);



























