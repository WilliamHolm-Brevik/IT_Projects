function regnUt()
{
    //legger tallene fra tekstboks inn i variabler
    var tall1 = document.getElementById("txtTall1").value;
    var tall2 = document.getElementById("txtTall2").value;


    //variabler for sum av utregning
    var sum = 0 ;
    //variabel for å finne hvilken operator bruker har valgt

    var operator = document.getElementById("selOperatorer").value;

    console.log(operator)
    //sjekke valgt operator og utfre regning
    //her bruker vi if-tester for å finne riktig alternativ

    if(operator == "pluss")
    {
        //vi må få JS til å forstå at dette er tall og ikke bokstaver/tegn, dette gjeler bare for + ikke andre regnearter
        sum = +tall1 + +tall2;
        //skriver ut svaret 
        document.getElementById("svar").innerHTML =  "sum: " + sum
    }

    else if(operator == "minus")
    {
        //vi må få JS til å forstå at dette er tall og ikke bokstaver/tegn, dette gjeler bare for + ikke andre regnearter
        sum = tall1 - tall2;
        //skriver ut svaret 
        document.getElementById("svar").innerHTML =  "sum: " + sum
    }

    else if(operator == "gange")
    {
        //vi må få JS til å forstå at dette er tall og ikke bokstaver/tegn, dette gjeler bare for + ikke andre regnearter
        sum = tall1 * tall2;
        //skriver ut svaret 
        document.getElementById("svar").innerHTML =  "sum: " + sum
    }

    else
    {
        //vi må få JS til å forstå at dette er tall og ikke bokstaver/tegn, dette gjeler bare for + ikke andre regnearter
        sum = tall1 / tall2;
        //skriver ut svaret 
        document.getElementById("svar").innerHTML =  "sum: " + sum
    }

}
