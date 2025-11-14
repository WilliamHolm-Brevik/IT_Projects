function kast()
{
    /*generer et tilfeldig tall mellom 1 og 6 og legger det i en variabel
    Math.random lager et tilfeldig tall opp til parameteret oppgitt (6),
    hvis ikke annet er oppgitt vil det da bli alle tall mellom 0-5.
    Vi skriver da +1 for å få tall mellom 1-6. Math.floor fjerner desimaler og gjør dem om til heltall*/

    var tall = Math.floor(Math.random()*6 + 1)

    //finne riktig bilde if-tester og vis det på skjerm
    if(tall == 1)
    {
        document.getElementById("terning").src = "../bilder/1.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }
    else if(tall == 2)
    {
        document.getElementById("terning").src = "../bilder/2.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }
    else if(tall == 3)
    {
        document.getElementById("terning").src = "../bilder/3.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }
    else if(tall == 4)
    {
        document.getElementById("terning").src = "../bilder/4.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }
    else if(tall == 5)
    {
        document.getElementById("terning").src = "../bilder/5.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }

    else{
        document.getElementById("terning").src = "../bilder/6.jpg";
        document.getElementById("feedback").innerHTML = "Du fikk tallet " + tall + ", trykk på knapp for nytt kast"
    }


}