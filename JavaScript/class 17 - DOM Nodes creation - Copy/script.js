var div = document.querySelectorAll('.special')[0];

// div.innerHTML= "<h3>Hello World</h3>";
/*
    document.createElemnt();

    document.createTextNode();

    parent.appendChild(childNode)

*/

var h3Node = document.createElement("h3");
var h3Textnode = document.createTextNode("Hello World");

h3Node.appendChild(h3Textnode);
div.appendChild(h3Node);
console.log(h3Node);

