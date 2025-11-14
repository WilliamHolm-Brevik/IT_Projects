var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 3;
//lager en variabel for dimensjon på rutene i rutenettet
var dim = 20;

function tegnRutenett()
{
    fargevalg = document.getElementById("colFarge").value;
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF";
    ctx.lineWidth = tykkelse;

    //kjører en løkke som øker verdi med 20 hver gang og kjører så lenge det er bredde igjen på canvas (<500)
    for(var i=0; i<canPaint.width; i+=dim)
    {
        //beveger oss langs X-aksen og tegner streker nedover
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canPaint.height);
        //beveger oss langs Y-aksen og tegner streker bortover
        ctx.moveTo(0, i);
        ctx.lineTo(canPaint.width, i);
    }

    ctx.stroke();
}

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

function tegnFirkant()
{
    var firX = document.getElementById("txtFirX").value;
    var firY = document.getElementById("txtFirY").value;
    var firB = document.getElementById("txtFirB").value;
    var firH = document.getElementById("txtFirH").value;
    //finner antall fra input
    var antall = document.getElementById("txtFirA").value;
    //definere ny B&H
    var nyBredde = firB/antall;
    var nyHoyde = firH/antall;

    fargevalg = document.getElementById("colFarge").value;
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF";
    ctx.lineWidth = tykkelse;

    //tegner firkant med variablene som koordinater (X,Y, Bredde, Høyde)

    for(var i = 0; i<antall; i++)
    {
        ctx.beginPath();
        ctx.rect(firX, firY, firH, firB)
        ctx.closePath();
        ctx.stroke();

        //trekker fra bredde & høyde for å ikke tegne oppå hverandre (likt)
        firB = firB-nyBredde;
        firH = firH-nyHoyde;
    }
    }
  

function tegnSirkel()
{
    var sirX = document.getElementById("txtSirX").value;
    var sirY = document.getElementById("txtSirY").value;
    var sirR = document.getElementById("txtSirR").value;//finner antall fra input
    var antall = document.getElementById("txtSirA").value;
    //definere ny Radius
    var nyRadius = sirR/antall;


    fargevalg = document.getElementById("colFarge").value;
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;

    ctx.strokeStyle = fargevalg + "FF";
    ctx.lineWidth = tykkelse;

    //tegner sirkel med variablene som koordinater (X,Y, radius)
    //sirkel = 2PIr (360 grader)

    for(var i = 0; i<antall; i++)
    {
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        //endre radius
        sirR = sirR-nyRadius;
    }
}