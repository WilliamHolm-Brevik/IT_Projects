
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

//funksjoner for fargevalg

function red()
{
    fargevalg = "#FF0000";
}

function green()
{
    fargevalg = "#00FF00";
}

function blue()
{
    fargevalg = "#0000FF";
}

function yellow()
{
    fargevalg = "#FFFF00";
}

function purple()
{
    fargevalg = "#9933FF";
}

function gray()
{
    fargevalg = "#999999";
}

function pink()
{
    fargevalg = "#FF00FF";
}

function black()
{
    fargevalg = "#000000";
}