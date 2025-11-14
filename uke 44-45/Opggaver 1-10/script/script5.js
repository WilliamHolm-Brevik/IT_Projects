    //variabler for å holde oversikt over varene og antall
    //disse må være globale for å kunne ta vare på verdiene
    var liste = "";
    var teller = 0;

function leggTil()
{

    //legger til verdiene i variablene mine
    liste += "<li>" + txtVare.value + "</li>";
    //øker verdien med 1;
    teller ++;

    //viser listeelement med nye verdier;
    document.getElementById("varer").innerHTML = liste;
    //viser oppdatert antall varer 
    document.getElementById("txtAntall").value = teller;

}