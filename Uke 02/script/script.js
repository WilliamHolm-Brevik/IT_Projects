tabell = [
["<a href='https://www.oilers.no' target='_blank'>Stavanger Oilers</a>", 29, 19, 7, 1, 2, 61], 
["<a href='https://www.sparta.no' target='_blank'>Sparta</a>", 28, 18, 7, 2, 1, 59],
["<a href='https://www.friskaskerhockey.no/' target='_blank'>Frisk Asker</a>", 29, 16, 6, 3, 4, 58], 
["<a href='https://www.sil.no' target='_blank'>Storhamar</a>", 29, 16, 8, 3, 2, 56], 
["<a href='https://www.vif-hockey.no' target='_blank'>Vålerenga</a>", 29, 13, 6, 6, 4, 55], 
["<a href='https://www.stjernen.no' target='_blank'>Stjernen</a>", 29, 16, 9, 2, 2, 54], 
["<a href='https://www.lillehammerhockey.no' target='_blank'>Lillehammer</a>", 29, 11, 14, 3, 1, 40],
["<a href='https://www.ringerikepanthers.no/klubb' target='_blank'>Ringerike Panthers</a>", 29, 5, 20, 1, 3, 20],
["<a href='https://www.mshockey.no/hjem' target='_blank'>Manglerud Star</a>", 29, 6, 21, 0, 2, 20],
["<a href='https://www.grunerhockey.no' target='_blank'>Grüner</a>", 28, 2, 24, 1, 1, 9]]

//lager en funksjon for å vise tabeløl slik at jeg slipper å gjøre det to ganger

function visTabell()
{
    //lager HTML kode til tabell
    var liste = "<table class='styled-table'><thead><tr><th>Lag</th><th>V</th><th>T</th><th>OV</th><th>OT</th><th>Poeng</th></tr></thead><tbody><tr>"

    for(var i=0; i<tabell.length; i++)
    {
        //skriver vi hvert enkelt ledd
        liste += "<td>" + tabell[i][0] + "</td><td>" + tabell[i][1] +  "</td><td>" + tabell[i][2] +  "</td><td>" + tabell[i][3] +  "</td><td>" + tabell[i][4] +  "</td><td>" + tabell[i][5] +  "</td><td>" + tabell[i][6]  + "</td><td>"
    }

    liste += "</tbody></table"
    document.getElementById("utskrift").innerHTML = liste;
}

visTabell()

//array med

var lag = ["Stavanger Oilers", "Sparta", "Frisk Asker", "Storhamar", "Valerenga", "Stjernen", "Lillehammer", "RIngerike Panthers", "Manglerud Star", "Grüner"]

for(var i=0; i<lag.length; i++)
{
    var valg = document.getElementById("option");
    valg.innerHTML = lag[i];
    valg.value = i
    document.getElementById("selLag").appendChild(valg);
}

function poeng()
{
    var valgt = document.getElementById("selLag").value;
    var plusspoeng = document.getElementById("txtPoeng").value;

    tabell[valgt[6]] += parselInt(plussPoeng);

    //tegner tabell på nytt
    visTabell();
}

function swap()
{
    document.getElementById("img").src = "bilder/logo2.png";
}

function swap2()
{
    document.getElementById("img").src = "bilder/logo.png";
}


//avslutter tabell


/*
//console.table(vareliste)

//globale variabler (valgte varer og samlet pris)
var tabellnumber = [];
var samletPris = 0;

//legger varer og pris inn i liste
for(var i = 0; i<hockey.length; i++)
{
    var valg = document.createElement("option");
    //vi bruker to indekser da dette blir hentet fra en flerdim array.
    //første index er dynamisk[i], mens andre er statisk [1] / [2]
    valg.innerHTML = hockey[i][1];
    valg.value = hockey[i][0];
    document.getElementById("selLag").appendChild(valg)
}

function velgLag()
{
    //legger til varer og pris i kvittering (flerdim array)
    //bruker selectedIndex for å hente laber (innerHTML) fra liste

    tabellnumber.push([document.getElementById("selLag")[document.getElementById("selLag").selectedIndex].innerHTML, document.getElementById("selLag").value])

    console.table(tabellnumber)

    samletPris += parseInt(document.getElementById("selLag").value);
}

window.onload = visTabell()

function visTabell()
{
    //skrive HTML-kode som ren tekst, dette blir tolket som HTML etterpå i nettleser
    //header til tabell
    var skrivUt = "<table border='1'>"

    //lager en nesten løkke for å skrive ut innholdet i tabellen
    for(var i=0; i<hockey.length; i++)
    {
        //lager ny rad i tabellen 
        skrivUt += "<tr>";

        //henter hver enkelt vare og pris fra den fjerdedim arrayer
        for(var j=0; j<hockey[i].length; j++)
        {
            skrivUt +="<td>" + hockey[i][j] + "</td>";
        }
        skrivUt += "</tr>";
    }

    skrivUt += "</table>"

    document.getElementById("utskrift").innerHTML = skrivUt;


}
*/