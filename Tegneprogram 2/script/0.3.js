document.getElementById("canPaint").onmousedown = musNed;
document.getElementById("canPaint").onmouseup = musOpp;

var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";

function musNed(evt)
{
    document.getElementById("canPaint").onmousemove = flyttMus;
    //endrer til fargevalgvariabel
    ctx.strokeStyle = fargevalg + "FF";
    ctx.beginPath();
    ctx.moveTo(evt.clientX, evt.clientY);
}

function musOpp(evt)
{
    document.getElementById("canPaint").onmousemove = flyttMus;
    ctx.strokeStyle = fargevalg + "00";
    ctx.beginPath();
    ctx.moveTo(evt.clientX, evt.clientY);
}

function flyttMus(evt)
{
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.stroke();
}

//funksjon for fargevalg
function farge()
{
    //henter fargeverdi fra colorPicker, slik at vi slipper å regne om fra RGB
    fargevalg = document.getElementById("colFarge").value;
}