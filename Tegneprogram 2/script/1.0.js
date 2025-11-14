var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 3;

function tegnStrek()
{
    //henter verdier fra input
    var startX = document.getElementById("txtStartX").value;
    var startY = document.getElementById("txtStartY").value;
    var sluttX = document.getElementById("txtSluttX").value;
    var sluttY = document.getElementById("txtSluttY").value;

    fargevalg = document.getElementById("colFarge").value;
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF";
    ctx.lineWidth = tykkelse;

    //tegner med variablene som koordinater
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(sluttX, sluttY);
    ctx.closePath();
    ctx.stroke();
}

