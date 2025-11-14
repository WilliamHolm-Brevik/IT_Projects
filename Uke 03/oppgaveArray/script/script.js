var sosialNettverk = [["Facebook", 2853],["Youtube", 2291], ["WhatsApp", 2000], ["Instagram", 1386],  ["FB Messager", 1300]  ["Wechat", 1242]]

 for(var i=0; i<sosialNettverk.length; i++)
{
    //lage et listelement
    var valg1 = document.createElement("option");
    //verdi i array blir tekst i listen
    valg1.innerHTML = sosialNettverk[i][0]
    //index i array blir value i listen
    valg1.value = i;
    //legger elementet i listen
    document.getElementById("selNettverk").appendChild(valg1);
} 

function visTabell()
{
    //lager HTML kode til tabell
    var liste = "<table class='styled-table'><thead><tr><th>Lag</th><th>V</th><th>T</th><th>OV</th><th>OT</th><th>Poeng</th></tr></thead><tbody><tr>"

    for(var i=0; i<sosialNettverk.length; i++)
    {
        //skriver vi hvert enkelt ledd
        liste += "<td>" + sosialNettverk[i][0] + "</td><td>" + sosialNettverk[i][1] +  "</td><td>" + sosialNettverk[i][2] +  "</td><td>" + sosialNettverk[i][3] +  "</td><td>" + sosialNettverk[i][4] +  "</td><td>" + sosialNettverk[i][5] +  "</td><td>" + sosialNettverk[i][6]  + "</td><td>"
    }

    liste += "</tbody></table"
    document.getElementById("utskrift").innerHTML = liste;
}

visTabell()

//array med
