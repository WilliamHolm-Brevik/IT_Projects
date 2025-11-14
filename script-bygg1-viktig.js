//Viser og lukker deler

function vis1() {
    var div = document.getElementById("egenPC");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

function vis2() {
    var div = document.getElementById("ferdigstillt");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

//Henter gmail og navn
var minData = localStorage.getItem("minData");
document.getElementById("minData").innerHTML = minData;
var mittNavn = localStorage.getItem("mittNavn");

/*const n = {
    name: "William", age: 20
}

console.log(n)
console.log(n.name)*/

//---------------------første del ferdig------------------------//

var navnArray = ["", "", "", "", "", "", "", "", "", "", "", ""];
var prisArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalPris = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Hovedkort
var komponent = {
  1: [
    ["Velg et komponent", ""],
    ["ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/hovedkort1.avif">'],
    ["ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="../bilder/logo.png">'],
    ["", , ]
  ],
  2: [["Velg et komponent"],
    ["ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/hovedkort1.avif">'],
    ["ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="../bilder/logo.png">'],
    ["", , ]],
  3: [["Velg et komponent"],
    ["ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/hovedkort1.avif">'],
    ["ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="../bilder/logo.png">'],
    ["", , ]],
  4: [["Velg et komponent"],
    ["ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/hovedkort1.avif">'],
    ["ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="../bilder/logo.png">'],
    ["", , ]],
  5: [
    ["Velg et komponent"],
    ["ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/hovedkort1.avif">'],
    ["ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="../bilder/logo.png">'],
    ["", , ]
  ]
};

for (var j = 1; j < 3; j++) {
  for (var i = 0; i < 3; i++) {
    var valg = document.createElement("option");
    valg.innerHTML = komponent[j][i][0];
    valg.value = i;
    document.getElementById("selKomponent"+j).appendChild(valg);
}}


function byggKomponent(valgtSel)
{ 
  for (var j = 1; j <= 3; j++){
      // Add event listener for each select element
  var valgt = document.getElementById("selKomponent" + valgtSel).value;
  document.getElementById("totalpris").innerHTML = totalPris;
  console.log(valgt)
  
  navn = komponent[valgtSel][valgt][0];
  pris = komponent[valgtSel][valgt][1];
  bilde = komponent[valgtSel][valgt][3];
  totalPris += komponent[valgtSel][valgt][1];

  prisArray[valgtSel-1] = komponent[valgtSel][valgt][1]
  navnArray[valgtSel-1] = komponent[valgtSel][valgt][0]
}
  
  // Update the image and price based on the selected option
  if (valgtSel > 0) {
      document.getElementById("pris" + valgtSel).innerHTML = pris
      document.getElementById("bildediv" + valgtSel).innerHTML = bilde
  } 
  else {
      document.getElementById("pris" + valgtSel).innerHTML = "";
      document.getElementById("bildediv" + valgtSel).innerHTML = "";
  }
  console.log(prisArray)
  console.log(totalPris)
}




//Prosessor 



//RAM


//Grafikkort


//Harddisk







/*-----------------Del 2 -------------------*/

//Strømforsyning

//Netterkskort

//Vifte

//Kabinett


//Skjerm


//Mus

//Tastatur

/*----------------------KVITTERING--------------*/

/*----Finne totalpris----*/

function bestillPC()
{
    if(selKomponent1.value == 0)
    {
        alert("Du har ikke valgt riktig greier")
    }
    else{
        alert("Du har valgt riktig")
        var name = mittNavn
        var email = minData
              /*var signup = "";
          if(chbNews.checked == true)
          {
              signup = "Du har registrert deg for vårt nyhetsbrev"
          }
          else
          {
              signup = "Du har ikke registrert deg for vårt nyhetsbrev"
          }*/

      //var dato = new Date(document.getElementById("datDato").value);
      //console.log(dato);
      
      //henter elementer fra Date for å lage datoen vi ønsker må vi legge til+1 på mnd da den teller fra 0-11
      //var datoen = dato.getDate() + "/" + parseInt(dato.getMonth()+1) + "-" + dato.getFullYear();
      //console.log(datoen);
      
      //henter tid og legger den i en streng, den trenger vi ikke å gjøre noe med
      //var tid = document.getElementById("timTid").value;

      //setter opp ulike variabler som til sammen skal utgjøre en mail, de variablene som inneholder order "kode"
      //er HTML referanser som konstruerer emailen, IKKE innholdet
      var epostKode = "mailto: ";
      //henter epostadressen fra input
      var mailA = email
      //overskrift på mail
      var emneKode = "?subject=";
      var emne = "Takk for din bestilling av aktivitet";
      //innholdet i mailen
      var kroppKode = "&body=";
      var overskrift = "Her er din registrerte informasjon";
      var linjeskiftKode = "%0D%0A";
      //legger alle strengene sammen til en lang streng
      /*var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
      linjeskiftKode + "Aktivitet: " +aktiviteten1 + linjeskiftKode + "Tid valgt å bestille aktivitet ved datoen: " + datoen + " kl: " + tid  +  linjeskiftKode + signup;*/

      var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
      linjeskiftKode + "Aktivitet: " + linjeskiftKode + "Tid valgt å bestille aktivitet ved datoen: " + " kl: "  +  linjeskiftKode + " Totalpris er " + totalPris + " kr";

      //sender mail
      window.location.href = mld;

      document.getElementById("kvittering").style.display == "block"

      document.getElementById("kvittering").textContent += " Du har bestillt aktiviteten " + " i tidspunktet "
    }
}