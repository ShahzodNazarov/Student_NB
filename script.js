let inpFirstname = document.getElementById("inpFirstName");
let inpLastName = document.getElementById("inpLastName");
let write = document.getElementById("writableBody");
let localStudent = localStorage.getItem("student");
let student = localStudent != null ? JSON.parse(localStudent) : [];
let localSavedArray = localStorage.getItem("savedArray");
let savedArray = localSavedArray != null ? JSON.parse(localSavedArray) : [];

if (student != null && student.length > 0) draw();
function addStudent() {
  let obj = {
    firstname: inpFirstname.value,
    lastname: inpLastName.value,
    isChecked: false,
  };
  if (inpFirstname != "" && inpLastName.value != "") {
    student.push(obj);
    localStorage.setItem("student", JSON.stringify(student));

    draw();
  } else {
    alert("input must be empty !!!");
  }
}

function draw() {
  let sum = "";
  for (let i = 0; i < student.length; i++) {
    sum += `
        <tr>
        <td>${i + 1}</td>
        <td>${student[i].firstname}</td>
        <td>${student[i].lastname}</td>
        <td ><input type="checkbox" onchange='handleChange(${i})'></td>
        <td>
        <button class='btnStyle' onclick="delet(${i})">delete</button>
        </td>
        </tr> 
        `;
  }
  write.innerHTML =
    sum +
    `
    <tr class="w-100">
    <td colspan='3'> 
    <input type="text" class="form-control " placeholder="enter Subject" id='subject'>
    </td>
   
    <td>
    <input type="date" class="form-control " id='data' >
    </td>
    <td>
    <button class="btn btn-success" onclick="handleSave()" >Save</button>
    </td>
    </tr>
    `;
}

function delet(i) {
  let newStudents = student.filter((item, index) => index != i);
  student = newStudents;
  localStorage.setItem("student", JSON.stringify(student));
  console.log(student);
  if (student.length == 0) window.location.reload();
  draw();
}

function handleChange(j) {
  for (let i = 0; i < student.length; i++) {
    if (j == i) {
      student[i].isChecked = !student[i].isChecked;
      console.log(student[i].isChecked);
    }
  }
}

function handleSave() {
  let data = document.getElementById("data");
  let subject = document.getElementById("subject");
  if (data.value.trim() != "" && subject.value.trim() != "") {
    let obj = {};
    for (let i = 0; i < student.length; i++) {
      obj = {
        idNum: i + 1,
        firstname: student[i].firstname,
        lastname: student[i].lastname,
        isChecked: student[i].isChecked,
        date: data.value,
        subject: subject.value,
      };
      savedArray.push(obj);
    }
    localStorage.setItem("savedArray", JSON.stringify(savedArray));
    window.location.reload();
  } else alert("teacher and data must be empty");
}
