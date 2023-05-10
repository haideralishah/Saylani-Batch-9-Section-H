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

function printWithBacktick(student) {
    var data = `<div style="border: 1px solid black; margin: 15px; padding: 15px;">
        <h2>${student.name}</h2>
        <h2>${student.fathersName}</h2>
        <h2>${student.rollNumber}</h2>
        <h3>${student.classDays}</h3>
        <h3>${student.subject}</h3>
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
    for(var i =0; i < allStudentsData.length; i++){
        printWithBacktick(allStudentsData[i]);
    }
}
getStudentsData();



function saveStudentInDB(student){
    allStudentsData.push(student);
    localStorage.setItem("studentsData", JSON.stringify(allStudentsData));
}