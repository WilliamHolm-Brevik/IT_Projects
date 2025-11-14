function sjekk()
{
    //noe at punktum noe
    var mail = document.getElementById("txtMail").ariaValueMax;

    //setter opp et filter, et regulært uttrykk som sjekker om det er gyldig format
    var filter = /\S+@\S+\.\S+/;

    if(filter.test(mail))
    {
        console.log("gyldig mail")
    }
    else{
        console.log("Feil ugyldig")
    }

}