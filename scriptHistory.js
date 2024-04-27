let localSavedArray = localStorage.getItem("savedArray");
let savedArray = localSavedArray != null ? JSON.parse(localSavedArray) : [];
let containerHistory = document.getElementById('containerHistory')
let localStudent = localStorage.getItem("student");
let student = localStudent != null ? JSON.parse(localStudent) : [];

drawSavedArray();

function drawSavedArray() {
  let remove = document.getElementById('imgRemovedHistory');
  if (remove != null) {
    remove.remove()  , window.location.reload();
  }
  let name = document.getElementById("idName");
  let sum = "";
  for (let i = 0; i < savedArray.length; i++) {
    sum += `
            <tr class=${savedArray[i].idNum == 1 && "table-success"}>
            <td>${savedArray[i].idNum}</td>
            <td>${savedArray[i].firstname}</td>
            <td>${savedArray[i].lastname}</td>
            <td class=${savedArray[i].isChecked == false ? 'text-danger':'text-success'}>
            ${savedArray[i].isChecked ? "bor" : "yo'q"}</td>
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
if (savedArray.length==0) {
  containerHistory.innerHTML+=`
  <img src="./empty.jpg" alt="#" class="img-fluid" style="max-height: 80vh;width:100%" id="imgRemovedHistory">
  `
}