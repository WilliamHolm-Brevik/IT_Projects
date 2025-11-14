//flerdimensjonal array som inneholder priser og varer
var vareliste = [
    [65, "Frossen pizza"],
    [30, "Pepsi max"],
    [25, "Brød"],
    [1000, "god opplevelse med Willy"],
    [75, "Kjøttdeig"],
    [20, "Pasta"],
    [85, "Ost"],
    [27, "Saft"],
    [25, "Sjokolade"],
    [43, "Kaffe"],
    [40, "Avis"]
]

//console.table(vareliste)

//globale variabler (valgte varer og samlet pris)
var kvittering = [];
var samletPris = 0;

//legger varer og pris inn i liste
for(var i = 0; i<vareliste.length; i++)
{
    var valg = document.createElement("option");
    //vi bruker to indekser da dette blir hentet fra en flerdim array.
    //første index er dynamisk[i], mens andre er statisk [1] / [2]
    valg.innerHTML = vareliste[i][1];
    valg.value = vareliste[i][0];
    document.getElementById("selVarer").appendChild(valg)
}

function velgVarer()
{
    //legger til varer og pris i kvittering (flerdim array)
    //bruker selectedIndex for å hente laber (innerHTML) fra liste

    kvittering.push([document.getElementById("selVarer")[document.getElementById("selVarer").selectedIndex].innerHTML, document.getElementById("selVarer").value])

    console.table(kvittering)

    samletPris += parseInt(document.getElementById("selVarer").value);
}

function visKvittering()
{
    //skrive HTML-kode som ren tekst, dette blir tolket som HTML etterpå i nettleser
    //header til tabell
    var skrivUt = "<table border='1'><tr><th>Vare</th><th>Pris</th></tr>"

    //lager en nesten løkke for å skrive ut innholdet i tabellen
    for(var i=0; i<kvittering.length; i++)
    {
        //lager ny rad i tabellen 
        skrivUt += "<tr>";

        //henter hver enkelt vare og pris fra den fjerdedim arrayer
        for(var j=0; j<kvittering[i].length; j++)
        {
            skrivUt +="<td>" + kvittering[i][j] + "</td>";
        }
        skrivUt += "</tr>";
    }

    skrivUt += "<tr><th>Samlet Pris</th><th>" + samletPris + "</th></tr></table>"

    document.getElementById("utskrift").innerHTML = skrivUt;

}
