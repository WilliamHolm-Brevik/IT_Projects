//hamburger meny
function myFunction(x)
{
    //starte change klassen i menyen (fra css)
    x.classList.toggle("change");

    //vise linker
    document.getElementById("myDropdown").style.display =
    document.getElementById("myDropdown").style.display == "block" ? "none" : "block";
}

function result() {
    var score = 0
    if (document.getElementById("riktigSvar1").checked)
    {
        score++
    }
    if (document.getElementById("riktigSvar2").checked)
    {
        score++
    }
    if (document.getElementById("riktigSvar3").checked)
    {
        score++
    }

    alert("Du greide å få " + score +  " av 3 riktige")
}