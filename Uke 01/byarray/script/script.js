var avstander = [
    [0, 22, 41, 71, 113],
    [22, 0, 21, 51, 93],
    [41, 21, 0, 30, 72],
    [71, 51, 30, 0, 113],
    [113, 71, 42, 22, 0],
]

var sted = ["Arendal", "Grimstad", "Lillesand", "Kristiansand"];

for(var i = 0; i < sted.length; i++)
{
    var valg1 = document.createElement("option");
    valg1.inneHTML = sted[i];
    valg1.value = i;
    document.getElementById("selFra").appendChild(valg1);
}

for(var i = 0; i < sted.length; i++)
{
    var valg2 = document.createElement("option");
    valg1.inneHTML = sted[i];
    valg1.value = i;
    document.getElementById("selTil").appendChild(valg2);
}

function beregn()
{
    var fraIndex = document.getElementById("selFra")
    var tilIndex = document.getElementById("selTil")

    var avstand = avstander[fraIndex][tilIndex];

    document.getElementById("utskrift").innerHTML = "Avstand fra " + sted[fraIndex] + " til " + sted[tilIndex] +  " er " + avstand + " km "
}