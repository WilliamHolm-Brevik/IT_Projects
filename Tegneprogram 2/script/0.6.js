document.getElementById("canPaint").onmousedown = musNed;
document.getElementById("canPaint").onmouseup = musOpp;

var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 3;

function musNed(evt)
{
    document.getElementById("canPaint").onmousemove = flyttMus;
    ctx.strokeStyle = fargevalg + "FF";
    //setter strektykkelse lik variabel
    ctx.lineWidth = tykkelse;
    ctx.beginPath();
    ctx.moveTo(evt.clientX, evt.clientY);
}

function musOpp(evt)
{
    document.getElementById("canPaint").onmousemove = flyttMus;
    ctx.strokeStyle = fargevalg + "00";
    ctx.lineWidth = tykkelse;
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

//funksjon for strektykkelse
function strekTykk(){
    //setter tykkelse lik verdi fra range og viser verdi i tesktboks
    tykkelse = document.getElementById("rngTykkelse").value;
    txtTykk.value = tykkelse;
}

//funksjon for utvisking
function viskUt(){
    //setter fargevalg lik bakgrunnsfarge på canvas og øker tykkelsen
    fargevalg = "#FFFFFF";
    tykkelse = 10;
}

//funksjon for sletting
function slett(){
    //tømmer canvas
    ctx.clearRect(0,0, canPaint.width, canPaint.height);

    //setter variabler & kopmponenter tilbake til utgangspunktet
    fargevalg = "#000000";
    tykkelse = 3;

    colFarge.value = fargevalg;
    rngTykkelse.value = tykkelse;
    txtTykk.value = tykkelse;
}

//funksjon for tekst på canvas
function tekst()
{
    //definer canvas tekst
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "#FF0000";
    //finner midt på tekststreng
    ctx.textAlign = "center";
    //skriver tekst fra tekstboks mift på canvas
    ctx.fillText(document.getElementById("txtTekst").value, canPaint.width/2, canPaint.height/2);
}

function bilde1()
{
    //legger bilde på canvas; henter bilde og legger det i en variabel
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
}

function bilde2()
{
    var img = document.getElementById("napoleon");
    ctx.drawImage(img, 10, 10);
}