//array med ulike kunstnere til select
var kunstner = ["Claude Monet", "Edvard Much", "Jackson Pollock", "Pablo Picasso", "Salvador Dali"];
//legger array inn i select
for(var i=0; i<kunstner.length; i++)
{
    //lage et listelement
    var valg = document.createElement("option");
    //verdi i array blir tekst i listen
    valg.innerHTML = kunstner[i];
    //index i array blir value i listen
    valg.value = i;
    //legger elementet i listen
    document.getElementById("selKunstner").appendChild(valg);
} 
function reg()
{
    //henter inn verdier fra komponenter
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var artist = kunstner[document.getElementById("selKunstner").value];
    var size = "";
    //finner valgt radiobutton
    if(rbTS1.checked == true)
    {
        size = "small";
    }
    else if(rbTS2.checked == true)
    {
        size = "medium";
    }
    else if(rbTS3.checked == true)
    {
        size = "large";
    }
    else
    {
        size = "x-large";
    }
    //sjekker om checkbox er huket av
    var signup = "";
    if(chbNews.checked == true)
    {
        signup = "Du har registrert deg for vårt nyhetsbrev"
    }
    else
    {
        signup = "Du har ikke registrert deg for vårt nyhetsbrev"
    }
    /*console.log(name);
    console.log(email);
    console.log(artist);
    console.log(size);
    console.log(signup);*/
    //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
    //er HTML referanser som konstruerer emailen, IKKE innholdet
    var epostKode = "mailto: ";
    //henter epostadressen fra input
    var mailA = email
    //overskrift på mail
    var emneKode = "?subject=";
    var emne = "Takk for din bestilling";
    //innholdet i mailen
    var kroppKode = "&body=";
    var overskrift = "Her er din registrerte informasjon";
    var linjeskiftKode = "%0D%0A";
    //legger alle strengene sammen til en lang streng
    var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
    linjeskiftKode + "Favorittkunstner: " + artist + linjeskiftKode + "Trøyevalg: " + size + linjeskiftKode + signup;
    //sender mail
    window.location.href = mld;
}