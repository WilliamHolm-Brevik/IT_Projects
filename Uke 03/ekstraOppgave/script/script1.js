/***Hviser antall brukere */

//liste over de ulike mediene og antall brukere 
var media = [];
media[0] = ["Navn", "Antall Brukere"];
media[1] = ["Facebook", 2853];
media[2] = ["Youtube", 2291];
media[3] = ["WhatsApp", 2000];
media[4] = ["Instagram", 1386];
media[5] = ["FB Messanger", 1300];
media[1] = ["WeChat", 1242];

//Starter tabell
var tab = "<table><tr><th>Navn</th><th>Antall Brukere</th></tr><tr>"

//starter løkka på 1, pga GC, bruker løkkr til å legge inn i lista og tabell
for (var j=1; j<media.length; j++)
{
    var valg1 = document.createElement("option");
    valg1.innerHTML = media[j][0]
    valg1.value = j;
    document.getElementById("selMedia").appendChild(valg1);

    tab+= "<td>" + media[j][0] + "</td><td>" + media[j][1] + "</td></tr>"
}

tab += "</table>"
document.getElementById("utskrift").innerHTML = tab;

/***HENTER GOOGLE CHART ***/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//tegner chart med å lage en kopi av array

function drawChart() {

  var media2 = google.visualization.arrayToDataTable([
    [media[0][0], media[0][1]],
    [media[1][0], media[1][1]],
    [media[2][0], media[2][1]],
    [media[3][0], media[3][1]],
    [media[4][0], media[4][1]],
    [media[5][0], media[5][1]]
  ]);

  var options = {'title:': 'Brukere på sosiale medier i millioner', is3D: true, 'width': 550, 'height': 400};

  var chart = new google.visualization.PieChart(document.getElementById('diagram'));

  chart.draw(media2, options);
}


/**LAGRE BRUKER&FFAVORITT**/
var brukere = []

//vi må sjeke om det ligger noe i LS
if(localStorage.getItem("brukere") !=null)
{
    //hvis det er data der kjør funksjon
    brukere = JSON.parse(localStorage.getItem(brukere));
    //vis();

}

function reg()
{
    var navn = document.getElementById("txtNavn").value;
    //sjekker alle radioknapper og finner value til valg
    var valg = document.querySelector('input[name="media"]:checked').value;
    //bruker variabel valg for å finne riktig verdi fra array
    var favoritt = media[valg][0];
    //legger bruker inn i en ny variabel

    var nyBruker = [navn, favoritt]

    localStorage.setItem("brukere", JSON.stringify(nyBruker));

    vis();
}

function vis()
{
    //Henter brukere fra LS, gjør nå en streng nå om til en array
    var regBrukere = JSON.parse(localStorage.getItem("brukere"));

    //Starter tabell
    var tab = "<table><tr><th>Bruker</th><th>Favoritt</th></tr><tr>"
    for(var i=0; i<regBrukere.length; i++)
    {
        tab += "<td>" +regBrukere[i][0] + "</td><td>" + regBrukere[i][1] + "</td></tr>"
    }

    tab += "</table>";
    document.getElementById("utskrift").innerHTML = tab;
}


/*** ENDRER VERDIER I ARRAY ***/
function antall()
{
    var valgt = document.getElementById("selMedia").value;
    var nyttAntall = document.getElementById("txtAntall").value;
    //legger nytt antall inn i flerdimensjonal array
    media[valgt][1] = parseInt(nyttAntall);
    console.table(media)

    drawChart()


}



/***FARGEVALG***/

//Lager en array som igjen skal legge fargekombinasjonen i
var kombinasjonen = [];

kombinasjonen[0] = sessionStorage.getItem["Farger1"];
kombinasjonen[1] = sessionStorage.getItem["Farger2"];


//Bruker fargene på siden
document.body.style.background = kombinasjonen[0];
document.body.style.color = kombinasjonen[1];

//Lager array som skal brukes i liste
var farger = ["Hvit/Svart", "Svart/Hvit", "Lilla/Grå"]

for(var i=0; i<farger.length; i++)
{
    var valg = document.createElement("option");
    valg.innerHTML = farger[i];
    valg.value = i;   
    document.getElementById("selFarger").appendChild(valg);
}

function endre()
{
    var kombi = document.getElementById("selFarger").value

    if(kombi == 0)
    {
        //setter valge farger
        kombinasjonen = ["#FFFFFF", "#000000"]
        //bruker fargene på siden
        document.body.style.background = kombinasjonen[0];
        document.body.style.color = kombinasjonen[1];
        //lagrer i sessionstorage
        sessionStorage.setItem("farger1", kombinasjonen[0])
        sessionStorage.setItem("farger2", kombinasjonen[1])
    }

    else if(kombi == 1)
    {
        //setter valge farger
        kombinasjonen = ["#000000", "#FFFFFF"]
        //bruker fargene på siden
        document.body.style.background = kombinasjonen[0];
        document.body.style.color = kombinasjonen[1];
        //lagrer i sessionstorage
        sessionStorage.setItem("farger1", kombinasjonen[0])
        sessionStorage.setItem("farger2", kombinasjonen[1])
    }

    else if(kombi == 2)
    {
        //setter valge farger
        kombinasjonen = ["#603F83", "#C7D3D4"]
        //bruker fargene på siden
        document.body.style.background = kombinasjonen[0];
        document.body.style.color = kombinasjonen[1];
        //lagrer i sessionstorage
        sessionStorage.setItem("farger1", kombinasjonen[0])
        sessionStorage.setItem("farger2", kombinasjonen[1])
    }
}

