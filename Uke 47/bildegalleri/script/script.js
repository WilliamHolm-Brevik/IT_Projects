//Åpner LB
function openModal()
{
    document.getElementById("myModal").style.display = "block";
}

//Lukker LB
function closeModal()
{
    document.getElementById("myModal").style.display = "none";
}

//Starter ved første bilde
var slideIndex = 1;
//bruker første bilde som funksjonsparameter
showSlides(slideIndex);

//pilknapper fra/tilbake
function plussSlides(n)
{
    //vil være enter +1 eller -1 avhengig av hvilken knapp man trykker på
    showSlides(slideIndex +=n)
}

function currentSlide(n)
{
    //henter verdi fra hvilket vilde man klikker på
    showSlides(slideIndex =n)
}

function showSlides(n)
{
    var i;
    //store bilder i LB
    var slides = document.getElementsByClassName("mySlides");
    //thumbnails inne i LB
    var dots = document.getElementsByClassName("demo");
    //bildetekst 
    var captionText = document.getElementById("caption");

    //setter tilbake til første bilde når bruker har bladd gjennom alle 
    if(n > slideIndex.length)
    {
        slidesIndex = 1;
    }

    //setter tilbake til siste bilde når bruker har bladd tilbake 
    if(n < 1)
    {
        slideIndex = slides.length;
    }

    //setter opp løkker for å vise bilder korrekt
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display = "none"
    }

    for(i=0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    //viser korrekt bilde med tilhørende tekst
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;


}