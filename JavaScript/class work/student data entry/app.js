var stName = document.querySelectorAll("#student-name")[0];
var fName = document.querySelectorAll("#father-name")[0];
var rollNumber = document.querySelectorAll("#roll-number")[0];

var days = document.querySelectorAll(".class-timings");
var subject = document.querySelectorAll("#subject")[0];

var errorMsg = document.querySelectorAll("#error-msg")[0];

function registerNewStudent() {
    var student = {
        name: stName.value,
        fathersName: fName.value,
        rollNumber: rollNumber.value,
        subject: subject.value
    }
    for (var i = 0; i < days.length; i++) {
        if (days[i].checked) {
            student.classDays = days[i].value
        }
    }

    if (student.name &&
        student.fathersName &&
        student.rollNumber &&
        student.subject &&
        student.classDays
    ) {
        printStudentData(student);
        saveStudentInDB(student);
    }
    else {
        errorMsg.innerHTML = 'All fields are required.';
        errorMsg.style.color = "red";

        setTimeout(function () {
            errorMsg.innerHTML = "";
        }, 3000)
    }
}


var stdntDiv = document.querySelectorAll("#students-data")[0];
function printStudentData(student) {
    printWithBacktick(student);
    // printWithDOMNodes(student);
}

function printWithBacktick(student, elementIndex) {
    var data = `<div style="border: 1px solid black; margin: 15px; padding: 15px;">
        <h2>${student.name}</h2>
        <h2>${student.fathersName}</h2>
        <h2>${student.rollNumber}</h2>
        <h3>${student.classDays}</h3>
        <h3>${student.subject}</h3>
        <button 
        onclick="deleteStudent(this, ${elementIndex})">
            Delete
        </button>
    </div>`;
    stdntDiv.innerHTML += data;
}



var allStudentsData = [];
function getStudentsData() {
    var studentsData = localStorage.getItem('studentsData');
    if (studentsData) {
        allStudentsData = JSON.parse(studentsData);
    }
    console.log(allStudentsData);
    for (var i = 0; i < allStudentsData.length; i++) {
        printWithBacktick(allStudentsData[i], i);

        
        // printWithDOMNodes(allStudentsData[i]);

    }
}
getStudentsData();



function saveStudentInDB(student) {
    allStudentsData.push(student);
    localStorage.setItem("studentsData", JSON.stringify(allStudentsData));
}


function printWithDOMNodes(student) {
    var div = document.createElement('DIV');
    // <h2>${student.name}</h2>
    var h2StName = createElementNodes("H2", student.name);
    var h2FathersName = createElementNodes("H2", student.fathersName);
    var h2RolNumber = createElementNodes("H2", student.rollNumber);
    var h3ClassDays = createElementNodes("H3", student.classDays);
    var h3Subject = createElementNodes("H3", student.subject);

    div.appendChild(h2StName);
    div.appendChild(h2FathersName);
    div.appendChild(h2RolNumber);
    div.appendChild(h3ClassDays);
    div.appendChild(h3Subject);
    div.setAttribute('style', "border: 1px solid black; margin: 15px; padding:15px; background-color: pink;");

    stdntDiv.appendChild(div);

}

function createElementNodes(elementName, textContent) {
    var element = document.createElement(elementName);
    var elementText = document.createTextNode(textContent);
    element.appendChild(elementText);
    return element;
}






function deleteStudent(delBtnElement, elementIndex) {
    // parentDiv.removeChild(nodeToRemove);  
    console.log(elementIndex, allStudentsData);
    stdntDiv.removeChild(delBtnElement.parentNode);

    stdntDiv.innerHTML = "";
    allStudentsData = [];
    getStudentsData();

}