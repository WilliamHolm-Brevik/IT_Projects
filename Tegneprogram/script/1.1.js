var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 3;
//lager en variabel for dimensjon på rutene i rutenettet

function tegnRutenett()
{
    
}

function tegnStrek()
{
    var startX = document.getElementById("txtStartX").value
    var startY = document.getElementById("txtStartY").value
    var sluttX = document.getElementById("txtSluttX").value
    var sluttY = document.getElementById("txtSluttY").value



    fargevalg = document.getElementById("colFarge").value
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF"
    ctx.lineWidth = tykkelse; 

    //tegner med variablene som koordinater

    ctx.beginPath();
    ctx.moveTo(startX, startY)
    ctx.lineTo(sluttX, sluttY)
    ctx.closePath();
    ctx.stroke();
}

function tegnFirkant()
{
    var firX = document.getElementById("txtFirX").value
    var firY = document.getElementById("txtFirY").value
    var firB = document.getElementById("txtFirB").value
    var firH = document.getElementById("txtFirH").value



    fargevalg = document.getElementById("colFarge").value
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF"
    ctx.lineWidth = tykkelse; 

    //tegner med variablene som koordinater

    ctx.beginPath();
    ctx.rect(firX, firB, firB, firH)
    ctx.closePath();
    ctx.stroke();
}

function tegnSirkel()
{
    var sirX = document.getElementById("txtSirX").value
    var sirY = document.getElementById("txtSirY").value
    var sirR = document.getElementById("txtSirR").value



    fargevalg = document.getElementById("colFarge").value
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF"
    ctx.lineWidth = tykkelse; 

    //tegner med variablene som koordinater
    //sirkel = 2PR (360 grader)

    ctx.beginPath();
    ctx.arc(sirX, sirY, sirR, 0, 2*Math.PI)
    ctx.closePath();
    ctx.stroke();
}
