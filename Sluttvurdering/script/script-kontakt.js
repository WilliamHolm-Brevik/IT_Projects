document.getElementById("colorScheme").addEventListener("change", function() {
  var value = this.value;
  var hoveddel = document.getElementById("hoveddel");

  if (value === "ingen") {
    localStorage.setItem("color", "FFFFFF");
    localStorage.setItem("txtColor", "000000");
  } else if (value === "svarthvit") {
    localStorage.setItem("color", "#000000");
    localStorage.setItem("txtColor", "#FFFFFF");
  } else if (value === "hvitsvart") {
    localStorage.setItem("color", "#FFFFFF");
    localStorage.setItem("txtColor", "#000000");
  }  else if (value === "blårød") {
  localStorage.setItem("color", "#0000FF");
  localStorage.setItem("txtColor", "#FF0000");
}

  hoveddel.style.backgroundColor = localStorage.getItem("color");
  hoveddel.style.color = localStorage.getItem("txtColor");
});

// setter den originale sidne sine farger

document.getElementById("hoveddel").style.backgroundColor = localStorage.getItem("color");
document.getElementById("hoveddel").style.color = localStorage.getItem("txtColor");


function fontForandring() {
  var hoveddel = document.getElementById("hoveddel");

  if (localStorage.getItem("font") === "Verdana") {
    // hvis fonten til sidne er Verdana bytter den om
    localStorage.setItem("font", "Arial");
  } else {

    // også her 
    localStorage.setItem("font", "Verdana");
  }

  // update the font of the body
  document.body.style.fontFamily = localStorage.getItem("font");
}



var fontSize = localStorage.getItem("fontSize");

document.getElementById("hoveddel").style.fontSize = fontSize || "16px";

function fontSizeForandring() {
  fontSize = document.getElementById("fontSizeForandring").value;
  localStorage.setItem("fontSize", fontSize);
  document.getElementById("hoveddel").style.fontSize = fontSize + "px";
}

function vis1() {
  var div1 = document.getElementById("egenPC");
  if (div1.style.display === "none") {
    div1.style.display = "block";
  } else {
    div1.style.display = "none";
  }
}