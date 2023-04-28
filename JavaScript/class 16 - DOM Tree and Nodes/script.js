


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









































var div2 = document.querySelectorAll('#div2')[0];
function changeTargetElement(childNumber, updatedContent){
    var divChildList = div2.childNodes;
    var childCount = 0;
    for(var i = 0; i < divChildList.length; i++){
        if(divChildList[i].nodeType=== 1){
            childCount++;
            if(childCount === childNumber){
                divChildList[i].innerHTML = updatedContent;
            }
        }
    }
    console.log(childCount);
}

changeTargetElement(2, "Karachi");

changeTargetElement(3, "Larkana");

changeTargetElement(1, "Moenjo Daro");
