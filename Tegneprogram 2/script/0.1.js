//lager to lyttere til musehendelser knapp opp og knapp ned
document.getElementById("canPaint").onmousedown = musNed;
document.getElementById("canPaint").onmouseup = musOpp;

var ctx = document.getElementById("canPaint").getContext("2d");

function musNed(evt)
{
    //lager lytter for musebevelgelse
    document.getElementById("canPaint").onmousemove = flyttMus;
    //tegner med FULL synlighet
    ctx.strokeStyle = "#000000" + "FF";
    //begynner å tegne
    ctx.beginPath();
    //starter hvor musa er 
    ctx.moveTo(evt.clientX, evt.clientY);
}

function musOpp(evt)
{
    //lager lytter for musebevelgelse
    document.getElementById("canPaint").onmousemove = flyttMus;
    //tegner med INGEN synlighet
    ctx.strokeStyle = "#000000" + "00";
    //begynner å tegne
    ctx.beginPath();
    //starter hvor musa er 
    ctx.moveTo(evt.clientX, evt.clientY);
}

function flyttMus(evt)
{
    //tegner sterker dit hvor musa beveger seg
    //hvis den kjøres fra musNed = synlighet, fra musOpp = usynlig
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.stroke();
}