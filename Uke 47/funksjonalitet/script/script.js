//arrayer med biler
var biler= ["Nissan", "Tesla", "Opel", "Volvo", "Ford", "BMW"];

//fyller nedtrekkslisten fra arrayen 
for(var i=0; i<biler.length; i++)
{
    //lager et listeelement
    var valg = document.createElement("option");
    //verdi i arrayen blir tekst (label) i listen
    valg.innerHTML = biler[i];
    //index array blir da value i listen
    valg.value = i;
    //legger elementene ut i lista
    document.getElementById("selBiler").appendChild(valg);
}

function velgBil()
{
    //skriver ut på siden og bruker value fra select som parameter i arrayen 
    document.getElementById("utskrift").innerHTML = "Du har valgt " + biler[document.getElementById("selBiler").value]; 
}

function mail()
{
    //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
    //er HTML referanser som konstruerer emailen, IKKE innholdet
    var epostKode = "mailto: ";
    //henter epostadressen fra input
    var mailAdresse = document.getElementById("txtMail").value;
    var emneKode = "?subject=";
    var emne = "Her er en gnerisk overskrift";
    //innholdet i mailen 
    var kroppKode = "&body=";
    var overskrift = "Her er din mail";
    var linjeskiftKode = "%0D%0A";
    var beskjed = document.getElementById("txtMessage").value
    //legger alle strengene sammen til en lang streng
    var mld = epostKode + mailAdresse + emneKode + emne + kroppKode + overskrift + linjeskiftKode + beskjed 

    window.location.href = mld;
}

