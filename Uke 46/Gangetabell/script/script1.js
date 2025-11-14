function gange()
{
    //tom array vi skal legge resultatene inn i 
    var tabell = [];
    //henter verdi fra input 
    var tall = document.getElementById("txtTall").value;
    //tømmer utskrift <p>
    document.getElementById("utskrift").innerHTML = "";

    //ganger tall med 1-10
    for(var i=1; i<=10; i ++)
    {
        tabell.push(i*tall);
        //vi må trekke fra 1 på i når vi definerer på index i array, da den starter på 0
        document.getElementById("utskrift").innerHTML += i + " x " + tall + " = " + tabell[i-1] + "<br />";
    }

}

