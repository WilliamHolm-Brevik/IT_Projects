function nySum()
{

    //legger til verdiene i variablene mine
    var valuta = txtSum.value * document.getElementById("selValuta").value;
    
    //skriver ut i tekstboksen, med to desimaler
    document.getElementById("txtNySum").value = valuta.toFixed(2);
}