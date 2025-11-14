
//array for å lagre priser, deklareres globalt
var priser = [];

function velgVarer()
{
    //legger hver pris, value fra listen, inn som et nytt element i array. MERK: dette lagres som tekst
    priser.push(document.getElementById("selVarer").value);

    console.log(priser);
}

function pris()
{
    //variabel til samlet pris , denne må deklareres lokalt da den ska nullstilles hver gang vi klikker på knappen
    var samletPris = 0;

    //kjører en løkke for å legge sammen verdiene i arrayen

    for(var i = 0; i<priser.length; i++)
    {
        //gjør om tekst til tall
        samletPris += parseInt(priser[i]);
    }
    console.log(samletPris)

    document.getElementById("utskrift").innerHTML = "Total sum = " + samletPris + " kr"
}
