var by = localStorage.getItem("byen");
if(by == null)
{
    by = "ikke oppgitt";
}

var fylke = localStorage.getItem("fylket");
if(fylke == null);
{
    fylke = "ikke oppgitt";
}

document.getElementById("utskrift").innerHTML = "Du bor i " + by + " som ligger i " + fylke;

function leggInn()
{
    by = document.getElementById("txtBy").value;
    localStorage.setItem("byen", by)

    fylke = document.getElementById("txtFylke").value;
    localStorage.setItem("fylket", fylke)

    document.getElementById("utskrift").innerHTML = "Du bor i " + by + " som ligger i " + fylke;
}

