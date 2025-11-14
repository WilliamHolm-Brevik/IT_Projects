//hamburger meny
function myFunction(x)
{
    //starte change klassen i menyen (fra css)
    x.classList.toggle("change");

    //vise linker
    document.getElementById("myDropdown").style.display =
    document.getElementById("myDropdown").style.display == "block" ? "none" : "block";
}

//array med ulike kunstnere til select
var aktivitet = ["Kongsten bad", "Huseby og Hankø Golf", "Kajakk utleie", "Idyll festival", "Fredrikstad kino", "Byvandring i gamlebyen", "Lucky Bowl", "FairPlay Padel", "Heihei"];

//legger array inn i select
for(var i=0; i<aktivitet.length; i++)
{
    //lage et listelement
    var valg1 = document.createElement("option");
    //verdi i array blir tekst i listen
    valg1.innerHTML = aktivitet[i];
    //index i array blir value i listen
    valg1.value = i;
    //legger elementet i listen
    document.getElementById("selAktivitet1").appendChild(valg1);
} 

function reg()
{
    //henter inn verdier fra komponenter
    var name = document.getElementById("txtName").value; //bruker input fra bruker til å lage variablen name for å hente verdiene vi ønske
    var email = document.getElementById("txtEmail").value; //bruker input til å lage variablen emial
    var aktiviteten1 = aktivitet[document.getElementById("selAktivitet1").value];  //bruker input fra bruker til å lage variablelen aktiviteten1
    //finner valgt radiobutton

    var signup = "";
    if(chbNews.checked == true)
    {
        signup = "Du har registrert deg for vårt nyhetsbrev"
    }
    else
    {
        signup = "Du har ikke registrert deg for vårt nyhetsbrev"
    }


    
    //lager en Date variabel (objekt) for å kunne hente verdiene vi ønsker
    var dato = new Date(document.getElementById("datDato").value);
    //console.log(dato);
    
    //henter elementer fra Date for å lage datoen vi ønsker må vi legge til+1 på mnd da den teller fra 0-11
    var datoen = dato.getDate() + "/" + parseInt(dato.getMonth()+1) + "-" + dato.getFullYear();
    //console.log(datoen);
    
    //henter tid og legger den i en streng, den trenger vi ikke å gjøre noe med
    var tid = document.getElementById("timTid").value;

    //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
    //er HTML referanser som konstruerer emailen, IKKE innholdet
    var epostKode = "mailto: ";
    //henter epostadressen fra input
    var mailA = email
    //overskrift på mail
    var emneKode = "?subject=";
    var emne = "Takk for din bestilling av aktivitet";
    //innholdet i mailen
    var kroppKode = "&body=";
    var overskrift = "Her er din registrerte informasjon";
    var linjeskiftKode = "%0D%0A";
    //legger alle strengene sammen til en lang streng
    var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
    linjeskiftKode + "Aktivitet: " + aktiviteten1 + linjeskiftKode + "Tid valgt å bestille aktivitet ved datoen: " + datoen + " kl: " + tid  +  linjeskiftKode + signup;

    //sender mail
    window.location.href = mld;

    document.getElementById("kvittering").style.display =
    document.getElementById("kvittering").style.display == "block"

    document.getElementById("kvittering").textContent += " Du har bestillt aktiviteten " + aktiviteten1 + " i tidspunktet " + tid 
}