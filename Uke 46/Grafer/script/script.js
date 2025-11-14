//lager en arrray men 6 startverdier som skal lagre antall av hvert terningkast

var opptelling = [0, 0, 0, 0, 0, 0];

//lager løkke som skal kjøres 1000 ganger

for(var i = 0; i<1000; i++)
{
    //lager et tilfeldig tall mellom 1 og 6
    var oyne = Math.floor(Math.random() *6 + 1);

    //øker antaø fprekomster i arrayen med 1 for hver gang tallet forekommer
    //HUSK men må trekke fra 1 for å legge det på riktig plass
    opptelling[oyne -1]++;

}

//console.log(opptelling)

for(var j=0; j<opptelling.length; j++)
{
    //lager en <p>
    var nyttElement = document.createElement("p")
    //skriver inn i det nye elementet, husk 1'ere ligger på index 0 osv
    nyttElement.innerHTML = "Antall " + (j+1) + "'ere " + opptelling[j]

    //lager funksjoner for liggende grafer (fra css)
    var nyGraf = document.createElement("span");
    //referer til klassen i stilarket 
    nyGraf.className= "graf"
    //bruker verdi i array som bredde på søyle i px
    nyGraf.style.width = opptelling[j] + "px"
    //generer det nye elementet
    nyttElement.appendChild(nyGraf);

    //skriver ut på siden 
    document.getElementById("utskrift").appendChild(nyttElement);
}
