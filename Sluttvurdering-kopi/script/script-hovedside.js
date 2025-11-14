// get the color value from localStorage
var lagretFarge = localStorage.getItem("color");
var lagretTxtFarge = localStorage.getItem("txtColor")
var lagretFont = localStorage.getItem("font");

// set the initial background color of hoveddel
document.getElementById("hoveddel").style.backgroundColor = lagretFarge || "#FFFFFF";
document.getElementById("hoveddel").style.color = lagretTxtFarge || "#000000";
document.getElementById("columntekst1").style.color = lagretTxtFarge || "#000000";
document.getElementById("columntekst2").style.color = lagretTxtFarge || "#000000";
document.getElementById("columntekst3").style.color = lagretTxtFarge || "#000000";
// set the initial font of the body
document.body.style.fontFamily = lagretFont || "Verdana";
// set the initial font size of the body

function svarthvitt() {
  var hoveddel = document.getElementById("hoveddel");
  var columntekst = document.getElementById("columntekst");

  if (localStorage.getItem("color") === "#FFFFFF") {
    // set default color to black
    localStorage.setItem("color", "#000000");
    localStorage.setItem("txtColor", "#FFFFFF");
  } else {
    // toggle between black and white
    localStorage.setItem("color", "#FFFFFF");
    localStorage.setItem("txtColor", "#000000");
  }

  // update the color of hoveddel
  hoveddel.style.backgroundColor = localStorage.getItem("color");
  hoveddel.style.color = localStorage.getItem("txtColor");
  columntekst1.style.color = localStorage.getItem("txtColor");
  columntekst2.style.color = localStorage.getItem("txtColor");
  columntekst3.style.color = localStorage.getItem("txtColor");
}

function fontForandring() {
  var hoveddel = document.getElementById("hoveddel");

  if (localStorage.getItem("font") === "Verdana") {
    // set default font to Arial
    localStorage.setItem("font", "Arial");
  } else {
    // toggle between Verdana and Arial
    localStorage.setItem("font", "Verdana");
  }

  // update the font of the body
  document.body.style.fontFamily = localStorage.getItem("font");
}