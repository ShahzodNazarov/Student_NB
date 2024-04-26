let localSavedArray = localStorage.getItem("savedArray");
let savedArray = localSavedArray != null ? JSON.parse(localSavedArray) : [];

let localStudent = localStorage.getItem("student");
let student = localStudent != null ? JSON.parse(localStudent) : [];

drawSavedArray();

function drawSavedArray() {
  let name = document.getElementById("idName");
  let sum = "";
  for (let i = 0; i < savedArray.length; i++) {
    sum += `
            <tr class=${savedArray[i].idNum == 1 && "table-danger"}>
            <td>${savedArray[i].idNum}</td>
            <td>${savedArray[i].firstname}</td>
            <td>${savedArray[i].lastname}</td>
            <td>${savedArray[i].isChecked ? "bor" : "yo'q"}</td>
            <td>${savedArray[i].date}</td>
            <td>${savedArray[i].subject}</td>
            </tr>
            `;
  }
  name.innerHTML += sum + `<hr>`;
}

function removeSavedArray() {
  savedArray = [];
  localStorage.removeItem("savedArray");
  drawSavedArray();
  window.location.reload();
}
