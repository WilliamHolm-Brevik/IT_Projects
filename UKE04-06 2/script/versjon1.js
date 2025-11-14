//deaktriverer restart knapp ved oppstart og setter fokus i tekstfeltet
document.getElementById("btnRestart").disabled = true;
document.getElementById("txtBokstav").focus();

//definerer canvasinnhold
var ctx = document.getElementById("canHangman").getContext("2d");

function tegnGalge()
{
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 320);
    ctx.lineTo(100, 300);
    ctx.lineTo(480, 300);
    ctx.lineTo(480, 320);
    ctx.moveTo(200, 300);
    ctx.lineTo(200, 20);
    ctx.lineTo(350, 20);
    ctx.lineTo(350, 50);
    ctx.stroke();
} 

tegnGalge();

function tegnHode()
{
    ctx.beginPath();
    ctx.arc(350, 75, 25, 0,Math.PI*2);
    ctx.stroke();
}

function tegnKropp()
{
    ctx.beginPath();
    ctx.moveTo(350, 100);
    ctx.lineTo(350, 225);
    ctx.stroke();
}

function tegnVenstreArm()
{
    ctx.beginPath();
    ctx.moveTo(350, 125);
    ctx.lineTo(300, 175);
    ctx.stroke();
}

function tegnHoyreArm()
{
    ctx.beginPath();
    ctx.moveTo(350, 125);
    ctx.lineTo(400, 175);
    ctx.stroke();
}

function tegnVenstreBein()
{
    ctx.beginPath();
    ctx.moveTo(350, 225);
    ctx.lineTo(300, 275);
    ctx.stroke();
}

function tegnHoyreBein()
{
    ctx.beginPath();
    ctx.moveTo(350, 225);
    ctx.lineTo(400, 275);
    ctx.stroke();
}

//array med svaralternativer (hovedsteder)
//vi skriver med STORE bokstaver da vi konverterer brukerinput til store bokstaver etterpå
var byer = ["LONDON", "HELSINKI", "TOKYO", "BEIJING", "MADRID", "MOSKVA", "OSLO", "WIEN"];

//finner et tilfeldig svaralternativ, vi genererer et tilfeldig tall som blir index i arrayen byer.
//dette tallet kan ikke overstige antall elementer i arrayen
var losningsord = byer[Math.floor(Math.random()*byer.length)];

//vi skal sammenligne svaret til bruker med løsningsord, når disse er like har bruker løst oppgaven
//vi legger fortløpende inn riktige bokstaver her
var svaret = [];

//array som skal inneholde de riktige, valgte, bokstavene. Ved oppstart skal denne beste av "_", 
//for hver bokstav i løsningsordet
var riktigeBokstaver = [];

//genererer tomme plasser i arrayen, basert på lengden i løsningsordet
for(var i=0; i<losningsord.length; i++)
{
    riktigeBokstaver.push("_");
}

//skriver ut på skjerm
document.getElementById("riktigeBokstaver").innerHTML = "Riktige bokstaver: " + riktigeBokstaver;
console.log(losningsord);

//array for feil bokstaver
var brukteBokstaver = [];
//antall sjanser ved oppstart, vi skal trekke fra 1 ved hvert feil svar
var antallSjanser = 6;

function mottaBokstav()
{
    //legger input fra bruker i en variabel
    var gjettetBokstav = document.getElementById("txtBokstav").value;

    //sjekker om det er gyldig input (bare bokstaver) og da tregner vi et regulæruttrytkk
    //^ = inneholder, $ = sammenlign med, hvis det bare er bokstaver blir sjekk true
    var sjekk = /^[a-zA-Z]+$/.test(gjettetBokstav);

    //lager et logisk utrykk som sjekker om gjettetBokstav er en bokstav OG det er bare et tegn skrevet inn
    if(sjekk == true && gjettetBokstav.length == 1)
    {
        //nullstiller testfelt og setter fokus
        document.getElementById("txtBokstav").value = "";
        document.getElementById("txtBokstav").focus();

        //gjøm om input til stok bokstav siden løsningsord er bare store bokstaver
        gjettetBokstav = gjettetBokstav.toUpperCase();

        //sjekke om gjettetBokstav er en del av løsningsord, er den det, legg den inn i svaret[]
        for(var i=0; i<losningsord.length; i++)
        {
            if(losningsord[i] == gjettetBokstav)
            {
                svaret[i] = gjettetBokstav;
            }
        }

        //denne variablen skal jeg øke med 1 hver gang jeg får en match mellom løsningsordet og svaret, vi kan ikke
        //sammenligne length på løsningsord og svaret da vi genererer tomme plaser i svaret etter hvor matchene er
        var sjekker = 0;

        for(var j=0; j<losningsord.length; j++)
        {
            if(losningsord[j] == svaret[j])
            {
                sjekker++;
            }
        }

        //om sjekker er lik losnigsord.length har spiller vunnet
        if(sjekker == losningsord.length)
        {
            alert("Du vant !!");
            //deaktiverer testknapp
            document.getElementById("btnTest").disabled = true;
            //akttiverer restartknapp
            document.getElementById("btnRestart").disabled = false;
        }

        //sjekker om gjettet bokstav er brukt før
        if(brukteBokstaver.indexOf(gjettetBokstav) ==-1)
        {
            //legger brukte bokstaver inn i en array
            brukteBokstaver.push(gjettetBokstav);

            //hvis bokstaven ikke finnes i løsningsordet trekker vi fra en sjanse
            if(losningsord.indexOf(gjettetBokstav) ==-1)
            {
                antallSjanser --;
            }
            //hvis den derimot finnes, skal den legges på riktig sted
            else
            {
                for(var k=0; k<losningsord.length; k++)
                {
                    if(losningsord[k] == gjettetBokstav)
                    {
                        //overskriver "_" og viser riktig bokstav
                        riktigeBokstaver[k] = gjettetBokstav;
                    }
                }
            }
        }
        else
        {
            alert("bokstaven er allerede brukt");
        }
        //skriver ut verdier til brukere
        document.getElementById("brukteBokstaver").innerHTML = "Brukte bokstaver: " + brukteBokstaver; 
        document.getElementById("riktigeBokstaver").innerHTML = "Riktige bokstaver: " + riktigeBokstaver;
        document.getElementById("sjanserIgjen").innerHTML = "Sjanser igjen: " + antallSjanser;
        console.log(svaret);

        //for hver gang vi gjetter feil skal vi tegne en kroppsdel
        if(antallSjanser == 5)
        {
            tegnHode();
        }
        else if(antallSjanser == 4)
        {
            tegnKropp();
        }
        else if(antallSjanser == 3)
        {
            tegnVenstreArm();
        }
        else if(antallSjanser == 2)
        {
            tegnHoyreArm();
        }
        else if(antallSjanser == 1)
        {
            tegnVenstreBein();
        }
        else if(antallSjanser == 0)
        {
            tegnHoyreBein();
            alert("du tapte");
            //deaktiverer testknapp
            document.getElementById("btnTest").disabled = true;
            //akttiverer restartknapp
            document.getElementById("btnRestart").disabled = false;
        }
    }
    //hvis det ikke er gyldig input
    else
    {
        alert("du kan kun skrive inn bokstaver og et tegn");
        //tømmer teskstfelt og setter fokus
        document.getElementById("txtBokstav").value = "";
        document.getElementById("txtBokstav").focus();
    }
}

function restart()
{
    //laster siden på nytt
    location.reload();
}

















