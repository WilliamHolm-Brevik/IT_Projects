var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 3;

function tegnFirkant()
{
    var firX = document.getElementById("txtFirX").value;
    var firY = document.getElementById("txtFirY").value;
    var firB = document.getElementById("txtFirB").value;
    var firH = document.getElementById("txtFirH").value;
    //finner antall fra input
    var antall = document.getElementById("txtFirA").value;
    //definere ny B&H
    

    //tegner firkant med variablene som koordinater (X,Y, Bredde, Høyde)

    for(var i = 0; i<antall; i++)
    {
        //generer tilfeldige hextall melomm 0 og 16,7 millioner
        //vi må gjøre dette inni løkka for å lage en ny farge hver gang
        fargevalg = Math.floor(Math.random()*16777215).toString(16);

        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = tykkelse;
        
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

    //tegner sirkel med variablene som koordinater (X,Y, radius)
    //sirkel = 2PIr (360 grader)

    for(var i = 0; i<antall; i++)
    {
        //generer tilfeldige hextall melomm 0 og 16,7 millioner
        //vi må gjøre dette inni løkka for å lage en ny farge hver gang
        fargevalg = Math.floor(Math.random()*16777215).toString(16);

        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = tykkelse;
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR, 0, 2*Math.PI);
        ctx.closePath();
        ctx.stroke();
        //endre radius
        sirR = sirR-nyRadius;
    }
}