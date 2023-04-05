/*
    localStorage.setItem(propertyName, propertyValue);
    localStorage.getItem(propertyName);
    */

var stdName = document.querySelectorAll(".student-name")[0];
function addStudent(){
    var studentNames = localStorage.getItem("studentName");
    if(!studentNames){
        studentNames = [];
    }
    else{
        studentNames = JSON.parse(studentNames);
    }    
    studentNames.push(stdName.value);
    console.log(studentNames);
    localStorage.setItem("studentName", JSON.stringify(studentNames));
}

var stdList = document.querySelectorAll('.students-name')[0];
function loadData(){
    var studntName = localStorage.getItem("studentName");
    console.log(studntName);
    stdList.innerHTML = stdList.innerHTML + "<li>" + studntName + "</li>"
}