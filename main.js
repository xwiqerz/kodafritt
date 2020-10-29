function getBlack() {
    var x, i;
    x = document.querySelectorAll(".makeItBlack");
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "orange";
    }
  }
//printar page protocol och page path
document.getElementById("checkProtocol").innerHTML =
"The page protocol is: " + window.location.protocol;

document.getElementById("pagePath").innerHTML =
"Page path is: " + window.location.pathname;

//ändrar färg på hemsidan
const changeColor = document.querySelector(".changeColor")

changeColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
})

function turnRed(){
    document.body.style.backgroundColor = "red";
}
//gör listor och använder filter och map på dom
var ages = [32, 33, 16, 40];
console.log(ages)

function checkAdult(age) {
  return age >= 18;
}

function checkAge() {
  document.getElementById("checkLine").innerHTML = ages.filter(checkAdult);
}

let persons = [
  {firstname : "Filip", lastname: "Karlsson"},
  {firstname : "Tim", lastname: "Svensson"},
  {firstname : "Jakob", lastname: "Nilsson"}
];


function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

function allNames() {
  document.getElementById("getFullName").innerHTML = persons.map(getFullName);
}

function printParagraph() {
  let para = document.createElement("P");
  para.innerText = "Discoooooooo!";
  document.body.appendChild(para);
}