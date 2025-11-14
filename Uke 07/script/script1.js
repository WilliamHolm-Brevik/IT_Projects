//Lager array for ønsket antall spillere. 
var antallSpillere = [64, 32, 16, 8, 4, 2]

//Legger verdiene til arrayen inn i selecten
for(var i = 0; i<antallSpillere.length; i++)
{
    var valg = document.createElement("option");
    valg.innerHTML = antallSpillere[i];
    valg.value = i;
    document.getElementById("selSpillere").appendChild(valg);
}
//deklarerer verdi for senere highscore system
var samletsamlet = []
//Button på siden vil starte denne funksjonen
function start()
{
    //Deklarerer forskjellige verdier. 
    var valgt = document.getElementById("selSpillere").value;
    var verdi = 64/(2**valgt)
    var spillerGruppe1 = [];
    var liste1 = []
    var highScore = 0
    var highScorePoints = 0
    //Lager spillerne, basert på input
    for(var i = 0; i<verdi; i++)
    {
        spillerGruppe1[i] = [];
        if(i<9)
        {
            spillerGruppe1[i].push("spiller0" + (i+1), Math.floor(Math.random() * 10) +1)
        }
        else{
            spillerGruppe1[i].push("spiller" + (i+1), Math.floor(Math.random() * 10) +1 )
        }
    }
    //For løkke som spiller antall runder basert på input.
    for(var i = 0; i<(7-valgt); i++)
    {
        //Lager liste som skrives ut på siden 
        liste1 = [];
        liste1[i] = "<table class='styled-table'><thead><tr><th>Spillere</th><th>Poeng</th></tr></thead><tbody><tr>";
        for(var k=0; k<spillerGruppe1.length; k++)
        {
            //skriver ut hver enkel spiller
            liste1[i] += "<td>" + spillerGruppe1[k][0] + "</td><td>" + spillerGruppe1[k][1] + "</td></tr>"
            //Samler inn highscoren for siste runde
            highScorePoints = spillerGruppe1[k][1]
            highScore = spillerGruppe1[k][0]
        }
        liste1[i] += "</tbody></table>";
        //skriver ut på siden på de forskjellige utskriftene
        document.getElementById("utskrift" + i).innerHTML = liste1[i];
        console.log(spillerGruppe1)
        //Lager spillergruppe2 som skal brukes som en slags halveringsmetode
        var spillerGruppe2 = []
        var neste=0
        for(j = 0; j < (spillerGruppe1.length/2); j++)
        {
            //Legger inn if tester hvis spillerene har lik verdi
            if(spillerGruppe1[j][1] == spillerGruppe1[spillerGruppe1.length-1-j][1])
            {
                //lager et tilfeldig tall som bestemmer hvem som kommer videre.
                neste = Math.floor(Math.random() * 2)
                if(neste == 0)
                {
                    spillerGruppe2.push(spillerGruppe1[spillerGruppe1.length-1-j])
                }
                if(neste == 1)
                {
                    spillerGruppe2.push(spillerGruppe1[j])
                }
                console.log(neste)
            }
            //Hvis den ene veriden er større enn den andre, kommer den andre vider osv
            if(spillerGruppe1[j][1] < spillerGruppe1[spillerGruppe1.length-1-j][1])
            {
                spillerGruppe2.push(spillerGruppe1[spillerGruppe1.length-1-j])
            }
            else if(spillerGruppe1[j][1] > spillerGruppe1[spillerGruppe1.length-1-j][1]){
                spillerGruppe2.push(spillerGruppe1[j])
            }
        }
        //sorterer arrayen og deretter legger at spillergruppe1 er lik spillergruppe2
        //Dette gjør slik at løkken kan spilles om igjen uten problem
        spillerGruppe2.sort()
        console.log(spillerGruppe2)
        spillerGruppe1 = spillerGruppe2
        //Legger til poeng for neste runde
        for(var l = 0; l<spillerGruppe2.length; l++)
        {
            spillerGruppe2[l][1] += (Math.floor(Math.random() * 10) +1)
        }
    }
    //Gjør slik at ved valg av annen input i selecten, blir de andre utskriftene tømt
    for(var k=0; k<(valgt); k++)
    {
        document.getElementById("utskrift" + (6-k)).innerHTML = "";
    }
    //Samler inn highscoren i en array
    var samlet = [highScorePoints, highScore]
    //Deretter setter jeg den nye highscoren i arrayen til highscorene
    samletsamlet[samletsamlet.length] = samlet
    //Skriver ut highscorene
    document.getElementById("highScore").innerHTML = "<strong> Highscorer: </strong> <br><br>"
    //Hvis det er en eller flere highscorer fra før av blir alle tidligere highscorer printet.
    //Hvis dte ikke er noe tidligere highscore blir det skrevet ut som highscorene samlet i første omgang
    if(localStorage.highscore)
    {
        localStorage.setItem("highscore", JSON.stringify(samletsamlet));
        samletsamlet.sort()
        samletsamlet.reverse()
        for(var m=0; m<samletsamlet.length; m++)
        {
            document.getElementById("highScore").innerHTML += (m+1) + ".  " + samletsamlet[m][1] + ": " + samletsamlet[m][0] + " " + "<br>"
        }
    }
    else{
        localStorage.setItem("highscore", JSON.stringify(samlet));
        document.getElementById("highScore").innerHTML += (1) + ".  " + samlet[0] + ": " + samlet[1]
    }
}
//Ved oppstart legger inn tidligere highscorer som er lagret i local storage
if(localStorage.highscore)
{
    samletsamlet = JSON.parse(localStorage.getItem("highscore"));
    document.getElementById("highScore").innerHTML = "<strong> Highscorer: </strong> <br><br>"
    //Sjekker om highscorene er en multidimentional array
    if(Array.isArray(samletsamlet) && Array.isArray(samletsamlet[0]))
    {
        for(var m=0; m<samletsamlet.length; m++)
        {
            document.getElementById("highScore").innerHTML += (m+1) + ". " + samletsamlet[m][1] + ": " + samletsamlet[m][0] + "  " + "<br>"
        }
    }
    else{
        samletsamlet[0] = JSON.parse(localStorage.getItem("highscore"))
        samletsamlet.pop()
        document.getElementById("highScore").innerHTML += (1) + ".  " + samletsamlet[0][1] + ": " + samletsamlet[0][0] + "  " + "<br>"
    }
}
//Hvis ikke dte finnes, skriver ut at det ikke finnes en highscore
else
{
    document.getElementById("highScore").innerHTML = "<strong>Ingen registrert high score</storng>";
}
console.log(samletsamlet)