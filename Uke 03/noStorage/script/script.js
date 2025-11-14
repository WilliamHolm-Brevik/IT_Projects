var colour = "";

function farge()
{
    //henter verdi fra liste
    colour = document.getElementById("selFarge").value;
    //bruker verdien som parameter i ny funksjon
    settBakgrunnsfarge(colour);
}

function settBakgrunnsfarge()
{
    //endrer farge på siden
    document.body.style.background = colour;
}