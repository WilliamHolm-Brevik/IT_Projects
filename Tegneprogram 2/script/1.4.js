var ctx = document.getElementById("canPaint").getContext("2d");
//variabel for fargevalg
var fargevalg = "#000000";
//variabel for strektykelse
var tykkelse = 5;
//variabel for synnlighet
var synlighet = "00";



function tegnStreker()
{
    //henter antall ganger vi skal kjøre løkka fra bruker input

    var antall = document.getElementById("txtAnt1").value;

    for(var i=0; i <antall; i++)
    {
        fargevalg = Math.floor(Math.random()*16777215).toString(16);
        synlighet = Math.floor(Math.random()*255).toString(16);
        ctx.strokeStyle = "#" + fargevalg;

        tykkelse = Math.floor(Math.random()*5+1);
        ctx.lineWidth = tykkelse

        //generer 4 tilfeldige heltall innenfor canvas størrelse str for moveto & lineTo
        var tall1 = Math.floor(Math.random()*canPaint.width);
        var tall2 = Math.floor(Math.random()*canPaint.height);
        var tall3 = Math.floor(Math.random()*canPaint.width);
        var tall4 = Math.floor(Math.random()*canPaint.height);


        ctx.beginPath();
        ctx.moveTo(tall1, tall2)
        ctx.lineTo(tall3, tall4)
        ctx.closePath();
        ctx.stroke()
    }
}
 
function tegnFigurer()
{
    //henter antall ganger vi skal kjøre løkka fra bruker input

    var antall = document.getElementById("txtAnt1").value;

    for(var i=0; i <antall; i++)
    {
        fargevalg = Math.floor(Math.random()*16777215).toString(16);
        synlighet = Math.floor(Math.random()*255).toString(16);
        ctx.strokeStyle = "#" + fargevalg;

        tykkelse = Math.floor(Math.random()*5+1);
        ctx.lineWidth = tykkelse

        //generer 4 tilfeldige heltall innenfor canvas størrelse str for moveto & lineTo
        var tall1 = Math.floor(Math.random()*canPaint.width);
        var tall2 = Math.floor(Math.random()*canPaint.height);
        var tall3 = Math.floor(Math.random()*canPaint.width);
        var tall4 = Math.floor(Math.random()*canPaint.height);


        ctx.beginPath();
        ctx.rect(tall1, tall2, tall3, tall4)
        ctx.arc(tall1, tall2, tall3,0, 2*Math.PI)
        ctx.closePath();
        ctx.stroke()
    }
}

function tegnGriddy()
{
    for(var i = 0; i<canPaint.width; i +=20)
    {
        fargevalg = Math.floor(Math.random()*16777215).toString(16);
        synlighet = Math.floor(Math.random()*255).toString(16);

        for(var j = 0; j<canPaint.width; j+= 20)
        {
            ctx.strokeStyle = "#" + fargevalg + synlighet;
            ctx.beginPath()
            ctx.rect(i, j, 20, 20)
            ctx.closePath();
            ctx.stroke()
        }
    }
}
function slett()
{
    ctx.clearRect(0, 0, canPaint.width, canPaint.height)
}

