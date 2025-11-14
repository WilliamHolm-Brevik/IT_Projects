//hamburger meny
function myFunction(x)
{
    //starte change klassen i menyen (fra css)
    x.classList.toggle("change");

    //vise linker
    document.getElementById("myDropdown").style.display =
    document.getElementById("myDropdown").style.display == "block" ? "none" : "block";
}

