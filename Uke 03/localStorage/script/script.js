//starter programmet med å hente en farge fra session storage
var colour = localStorage.getItem("farge");

//hvis det ikke er en farge i localStorage velgers en startverdi
if(colour == null)
{
    colour = "#CCCCCC";
}

//bruker verdien som parameter i ny funksjon
settBakgrunnsfarge(colour);


function farge()
{
    //henter verdi fra liste
    colour = document.getElementById("selFarge").value;

    //sender verdi til localStorage
    localStorage.setItem("fargen", colour);

    //bruker verdien som parameter i ny funksjon
    settBakgrunnsfarge(colour);
}

function settBakgrunnsfarge()
{
    //endrer farge på siden
    document.body.style.background = colour;
}