var ctx = document.getElementById("canPaint").getContext("2d");
console.log(canPaint.width)

var x = canPaint.width/2;
var y = canPaint.height/2;


function speaker()
{
    speaker1();
    speaker2();
    speaker3();
    speaker4();
}

function speaker1()
{

    var sirX = x/2
    var sirY = y/2

    //legger sammen bredde og øyde for å finne passende radius til sirkler so kswal være 1/4 av canvas
    var sirR = Math.floor((x+y)/4)
    //angir nye verdier til sirkel senker x og y med 5 hver gang og øker radius med 5
    var nyX = -5;
    var nyY = -5;  

    var nyR = 5

    var antall = Math.floor(sirR/nyR);



    for(var i=0; i <antall; i++)
    {
        var fargevalg = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = 1

        //bruker variabler som parameter for sirkel 
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR,0, 2*Math.PI)
        ctx.closePath();
        ctx.stroke()

        //endrer x og y og minsker radius med 5 (går fra største srikel til minste)
        sirX = sirX - nyX;
        sirY = sirY - nyY;
        sirR = sirR - nyR;
    }
}


function speaker2()
{

    var sirX = x*1.5
    var sirY = y/2

    //legger sammen bredde og øyde for å finne passende radius til sirkler so kswal være 1/4 av canvas
    var sirR = Math.floor((x+y)/4)
    //angir nye verdier til sirkel senker x og y med 5 hver gang og øker radius med 5
    var nyX = 5;
    var nyY = -5;

    var nyR = 5

    var antall = Math.floor(sirR/nyR);



    for(var i=0; i <antall; i++)
    {
        var fargevalg = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = 1

        //bruker variabler som parameter for sirkel 
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR,0, 2*Math.PI)
        ctx.closePath();
        ctx.stroke()

        //endrer x og y og minsker radius med 5 (går fra største srikel til minste)
        sirX = sirX - nyX;
        sirY = sirY - nyY;
        sirR = sirR - nyR;
    }
}


function speaker3()
{

    var sirX = x/2
    var sirY = y*1.5

    //legger sammen bredde og øyde for å finne passende radius til sirkler so kswal være 1/4 av canvas
    var sirR = Math.floor((x+y)/4)
    //angir nye verdier til sirkel senker x og y med 5 hver gang og øker radius med 5
    var nyX = -5;
    var nyY = 5;  

    var nyR = 5

    var antall = Math.floor(sirR/nyR);



    for(var i=0; i <antall; i++)
    {
        var fargevalg = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = 1

        //bruker variabler som parameter for sirkel 
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR,0, 2*Math.PI)
        ctx.closePath();
        ctx.stroke()

        //endrer x og y og minsker radius med 5 (går fra største srikel til minste)
        sirX = sirX - nyX;
        sirY = sirY - nyY;
        sirR = sirR - nyR;
    }
}


function speaker4()
{

    var sirX = x*1.5
    var sirY = y*1.5

    //legger sammen bredde og øyde for å finne passende radius til sirkler so kswal være 1/4 av canvas
    var sirR = Math.floor((x+y)/4)
    //angir nye verdier til sirkel senker x og y med 5 hver gang og øker radius med 5
    var nyX = 5;
    var nyY = 5;

    var nyR = 5

    var antall = Math.floor(sirR/nyR);



    for(var i=0; i <antall; i++)
    {
        var fargevalg = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = "#" + fargevalg;
        ctx.lineWidth = 1

        //bruker variabler som parameter for sirkel 
        ctx.beginPath();
        ctx.arc(sirX, sirY, sirR,0, 2*Math.PI)
        ctx.closePath();
        ctx.stroke()

        //endrer x og y og minsker radius med 5 (går fra største srikel til minste)
        sirX = sirX - nyX;
        sirY = sirY - nyY;
        sirR = sirR - nyR;
    }
}