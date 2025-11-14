//teller til array , må være global for ikke å bli nullstilt
var teller = 0;
//arrayen må legges globalt da den skal brukes i 3 ulike funksjoner
var spiller = []

function leggTil()
{
    var navn = document.getElementById("txtNavn").value;
    var klubb = document.getElementById("txtKlubb").value;
    var alder = document.getElementById("txtAlder").value;

    //sjekker om at alle felt er utfylt
    //her ska vi bruke et logisk uttrykk (AND && || NOT)

    if(navn == "" || klubb == "" || alder == 0)
    {
        console.log("klubb")
        console.log("alder")
        console.log("navn")

        console.log("Du må fylle ut alle feltene")
    }

    else{
        //legger inn i array hvis alle felter er fylt ut
        spiller[teller] = [navn, klubb, alder];

    }
    teller ++;

    var liste = "<table border='1'><tr><th>Navn</th><th>Klubb</th><th>Alder</th></tr><tr>"

    //leser gjennom array 

    for(var i = 0; i<spiller.length; i++)
    {
        //skrive ut enkeltspillere 
        liste += "<td>" + spiller[i][0] + "</td><td>" + spiller[i][1] + "</td><td>" + spiller[i][2] + "</td></tr>"
    }

    console.table(spiller)
    //avslutter tabell
    liste += "</table>";

    //skriver ut på siden
    var alderen = 0
    document.getElementById("utskrift1").innerHTML = liste;

    for(var j=0; j<spiller.length; j++)
    {
        alderen += parseInt(spiller[j][2]);
    }

    alderen = (alderen/spiller.length).toFixed(2);
    //skriver ut på siden
    document.getElementById("utskrift2").innerHTML = "Snittalder:  " + alderen;
}
function visKlubb()
{
    //tømmer liste for tidligere verdier for å unngp duplikater
    document.getElementById("selKlubb").innerHTML = "";

    for(var i=0; i<spiller.length; i++)
    {
        var valg = document.getElementById("option");
        valg.innerHTML = spiller[i][1];
        valg.value = spiller[i][1];
        document.getElementById("selKlubb").appendChild(valg);
    }

    //legger klubbene inn i liste 
}

function visSpiller()
{
    //henter klubbnavn fra lista
    var klubben = document.getElementById("selKlubbe").value;
    var spillere = "";
    //leser gjennom array og finner spiller som har likt klubbnavn med det som er valgt i liste
    for(var i=0; i<spiller.length; i++)
    {
        //sjekker om klubbnavn i array er likt valgt klubbnavn
        if(spiller[i][1] == klubben)
        {
            spiller += spiller[i][0] + "br />";
        }
    }
    document.getElementById("utskrift3").innerHTML = spillere;
}