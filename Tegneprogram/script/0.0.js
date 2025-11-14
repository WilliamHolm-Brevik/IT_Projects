//definerer canvas innhold og lager en variabel vi skal bruke til tegning
var ctx = document.getElementById("canPaint").getContext("2d");

//venstre del
ctx.fillStyle = "#ebcf34";
    //firkant(x,y,høyde, bredde)
ctx.fillRect(205, 100, 25, 150);

//midtre del
ctx.fillStyle = "#4a4942";
ctx.fillRect(230, 100, 30, 150);

//høyre del
ctx.fillStyle = "#ebcf34";
ctx.fillRect(260, 100, 25, 150);

//viskelær
ctx.fillStyle = "#d46f50";
ctx.fillRect(205, 60, 80, 40);

//fremre del
ctx.fillStyle = "#fffab3";
ctx.beginPath();
ctx.moveTo(205,250);
ctx.lineTo(230,300);
ctx.lineTo(260,300);
ctx.lineTo(285,250);
    //fyller farge i et lukket objekt
ctx.fill();

//spiss
ctx.fillStyle = "#4a3b3a";
ctx.beginPath();
ctx.moveTo(230,300);
ctx.lineTo(260,300);
ctx.lineTo(245,330);
ctx.fill();

//tekst
ctx.font = "30px Sans Serif";
ctx.fillStyle = "#000000";
    //midstiller tekst
ctx.textAlign = "center";
    //tekstinnhold (x & y)
ctx.fillText("Paint", canPaint.width/3, canPaint.height/2)
