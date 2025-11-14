function msg()
{
    var test = document.getElementById("datDato").value;
    //console.log(test)

    //lager en Date variabel (objekt) for å kunne ente veerdiene vi ønsker
    var dato = new Date(document.getElementById("datDato").value);
    //console.log(dato)

    //henter elementer fra Date for å lage datoen vi ønsker må vi legge til+1 på mnd da den teller fra 0-11
    var datoen = dato.getDate() + "/" + parseInt(dato.getMonth()+1) + "-" + dato.getFullYear();
    //console.log(datoen);

    //henter tid og legger den i en streng, den trenger vi ikke å gjøre noe med
    var tid = document.getElementById("timTid").value;

    //skriver ut dato & tid

    document.getElementById("Utskrift").innerHTML = "Du har valgt datoen " + datoen + " og klokkeslett " + tid  


}