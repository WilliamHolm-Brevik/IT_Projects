//Viser og lukker deler

function vis1() {
    var div1 = document.getElementById("egenPC");
    if (div1.style.display === "none") {
      div1.style.display = "block";
    } else {
      div1.style.display = "none";
    }
  }

function vis2() {
    var div2 = document.getElementById("ferdigstillt");
    if (div2.style.display === "none") {
      div2.style.display = "block";
    } else {
      div2.style.display = "none";
    }
  }

//Henter gmail og navn
var minData = localStorage.getItem("minData");
document.getElementById("minData").innerHTML = minData;
var mittNavn = localStorage.getItem("mittNavn");

//---------------------første del ferdig------------------------//

var navnArray = ["", "", "", "", "", "", "", "", "", "", "", ""];
var prisArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalPris = 0;

// Hovedkort
var komponent = {
  1: [
    ["Velg et Hovedkort", 0, "", ""],
    ["Best for design - ASUS PRIME H610M-A D4 Hovedkort", 1295, "hmmm", '<img id="bilde1" src="../bilder/bilde1.avif">'],
    ["Best for gaming - ASUS ROG STRIX B760-F GAMING WIFI Hovedkort", 3284, "hmmm1", '<img id="bilde1" src="../bilder/bilde2.avif">'],
    ["Best for Workstation -  ASUS WS C246 PRO Hovedkort", 3289, "hmmm", '<img id="bilde1" src="../bilder/bilde3.avif">' ]
  ],
  2: [["Velg en Prosessor", 0, "", ""],
    ["Best for design - AMD AM4 Ryzen 7 5800X3D CPU", 3990, "hmmm", '<img id="bilde1" src="../bilder/bilde4.avif">'],
    ["Best for gaming - AMD Ryzen 9 5900X CPU", 4190, "hmmm1", '<img id="bilde1" src="../bilder/bilde5.avif">'],
    ["Best for Workstation -  Intel Core i5-13600K CPU", 3999, "hmmm", '<img id="bilde1" src="../bilder/bilde6.avif">']],

  3: [["Velg et RAM", 0, "", ""],
    ["Best for design - Corsair Vengeance RGB PRO SL DDR4 3200Mhz 32GB (sort)", 1190, "hmmm", '<img id="bilde1" src="../bilder/bilde7.avif">'],
    ["Best for gaming - Kingston FURY Beast DDR4 3200MHz 32GB", 1417, "hmm",  '<img id="bilde1" src="../bilder/bilde8.avif">'],
    ["Best for Workstation -  Kingston FURY Impact DDR4 2666MHz", 379, "hmm", '<img id="bilde1" src="../bilder/bilde9.webp">' ]],

  4: [["Velg et Grafikkort", 0, "", ""],
    ["Best for design - GIGABYTE GeForce RTX 3070 Ti Gaming OC 8G", 7301, "hmmm", '<img id="bilde1" src="../bilder/bilde10.jpg">'],
    ["Best for gaming - ASUS TUF Gaming RTX 3060", 7429, "hmmm1", '<img id="bilde1" src="../bilder/bilde11.avif">'],
    ["Best for Workstation - ASUS Geforce GT1030 Lav Profil", 1180, "hmmm1" , '<img id="bilde1" src="../bilder/bilde12.webp">']],

  5: [
    ["Velg en Harddisk", 0, "", ""],
    ["Best for design - Kingston M.2 NV2 PCIe 4.0 NVMe SSD 2TB", 1449, "hmmm", '<img id="bilde1" src="../bilder/bilde13.avif">'],
    ["Best for gaming - WD BLACK SN770 NVMe SSD 1TB", 1219, "hmmm1", '<img id="bilde1" src="../bilder/bilde14.avif">'],
    ["Best for Workstation -   SEAGATE BARRACUDA 1 TB 3,5", 549, "hmmm", '<img id="bilde1" src="../bilder/bilde15.webp">']],

  6: [
    ["Velg Strømforsyning", 0, "", ""],
    ["Best for design - Cooler Master MWE Gold 850 V2 PSU", 1569, "hmmm", '<img id="bilde1" src="../bilder/bilde16.avif">'],
    ["Best for gaming - Corsair RM850 850W PSU Hvit", 1999, "hmmm1", '<img id="bilde1" src="../bilder/bilde17.webp">'],
    ["Best for Workstation -  Cooler Master MWE Bronze 750 230V V2", 1129, "hmnmnn", '<img id="bilde1" src="../bilder/bilde18.avif">']],

  7: [
    ["Velg et Nettverkskort", 0, "", ""],
    ["Best for design -ASUS PCE-AC68 Nettverkskort", 689, "hmmm", '<img id="bilde1" src="../bilder/bilde19.webp">'],
    ["Best for gaming - SUS XG-C100C Nettverkskort ", 1495, "hmmm1", '<img id="bilde1" src="../bilder/bilde20.avif">'],
    ["Best for Workstation -  TP-Link Archer TX50E Nettverkskort", 699, "hmmm", '<img id="bilde1" src="../bilder/bilde21.avif">' ]],

  8: [
    ["Velg en Vifte", 0, "", ""],
    ["Best for design -  NZXT Kraken M120 CPU Kjøler", 939, "hmmm", '<img id="bilde1" src="../bilder/bilde22.webp">'],
    ["Best for gaming -  Cooler Master MasterLiquid ML360 RGB TR4", 1159, "hmmm1", '<img id="bilde1" src="../bilder/bilde23.avif">'],
    ["Best for Workstation -  Be Quiet! Dark Rock Pro TR4 CPU Kjøler", 1199, "hmm", '<img id="bilde1" src="../bilder/bilde24.avif">' ]],

  9: [
    ["Velg et Kabinett", 0, "", ""],
    ["Best for design - Phanteks Eclipse G500A DRGB Mid Tower (sort)", 2059, "hmmm", '<img id="bilde1" src="../bilder/bilde25.avif">'],
    ["Best for gaming - ASUS ROG Strix Helios Midi Tower", 3528, "hmmm1",'<img id="bilde1" src="../bilder/bilde26.avif">'],
    ["Best for Workstation -   Fractal Design Define 7 Mid Tower (sort) ", 2149, "hmmm", '<img id="bilde1" src="../bilder/bilde27.avif">']],

  10: [
    ["Velg en Skjerm", 0, "", ""],
    ["Best for design - Philips 40 skjerm 40B1U5600", 6999, "hmmm",'<img id="bilde1" src="../bilder/bilde28.avif">'],
    ["Best for gaming - MSI 34 Curved gamingskjerm MAG342CQR", 4795,"hmmm",  '<img id="bilde1" src="../bilder/bilde29.avif">'],
    ["Best for Workstation -   Philips 34 Curved skjerm 346E2CUAE/00 ", 4990,"hmmm", '<img id="bilde1" src="../bilder/bilde30.avif">' ]],

  11: [
    ["Velg en Mus", 0, "", ""],
    ["Best for design - Logitech G Pro Wireless Gaming Mus (sort)", 1695, "hmmm", '<img id="bilde1" src="../bilder/bilde31.avif">'],
    ["Best for gaming - Corsair Gaming Scimitar Elite RGB Gaming Mus (sort)", 1195, "hmmm", '<img id="bilde1" src="../bilder/bilde32.avif">'],
    ["Best for Workstation -   Logitech MX Master 2S Trådløs Mus (graphite)", 1095, "hmmm", '<img id="bilde1" src="../bilder/bilde33.avif">' ]],

  12: [
      ["Velg et Tastetur", 0, "", ""],
      ["Best for design - Contour Balance Ergonomi Tastatur", 1299, "hmmm", '<img id="bilde1" src="../bilder/bilde34.avif">'],
      ["Best for gaming - Steelseries Apex Pro Mini Wireless Gaming Tastatur (sort)", 2995, "hmmm1", '<img id="bilde1" src="../bilder/bilde35.avif">'],
      ["Best for Workstation -  Logitech K750 Trådløs Tastatur", 1099, "hmm", '<img id="bilde1" src="../bilder/bilde36.avif">']],
  13: [
      ["Velg en Skjerm", 0, "", ""],
      ["Best for design - Philips 40 skjerm 40B1U5600", 6999, "hmmm",'<img id="bilde1" src="../bilder/bilde28.avif">'],
      ["Best for gaming - MSI 34 Curved gamingskjerm MAG342CQR", 4795,"hmmm",  '<img id="bilde1" src="../bilder/bilde29.avif">'],
      ["Best for Workstation -   Philips 34 Curved skjerm 346E2CUAE/00 ", 4990,"hmmm", '<img id="bilde1" src="../bilder/bilde30.avif">' ]],
  
  14: [
      ["Velg en Mus", 0, "", ""],
      ["Best for design - Logitech G Pro Wireless Gaming Mus ", 1695, "hmmm", '<img id="bilde1" src="../bilder/bilde31.avif">'],
      ["Best for gaming - Corsair Gaming Scimitar Elite RGB Gaming Mus ", 1195, "hmmm", '<img id="bilde1" src="../bilder/bilde32.avif">'],
      ["Best for Workstation -   Logitech MX Master 2S Trådløs Mus", 1095, "hmmm", '<img id="bilde1" src="../bilder/bilde33.avif">' ]],
  
  15: [
      ["Velg et Tastetur", 0, "", ""],
      ["Best for design - Contour Balance Ergonomi Tastatur", 1299, "hmmm", '<img id="bilde1" src="../bilder/bilde34.avif">'],
      ["Best for gaming - Steelseries Apex Pro Mini Wireless Gaming Tastatur", 2995, "hmmm1", '<img id="bilde1" src="../bilder/bilde35.avif">'],
      ["Best for Workstation -  Logitech K750 Trådløs Tastatur", 1099, "hmm", '<img id="bilde1" src="../bilder/bilde36.avif">']],
};


for (var j = 1; j < 16; j++) {
  for (var i = 0; i < 4; i++) {
    var valg = document.createElement("option");
    valg.innerHTML = komponent[j][i][0];
    valg.value = i;
    document.getElementById("selKomponent"+j).appendChild(valg);
}}

var pris = 0
var totalPrismoms = 0

function byggKomponent(valgtSel)
{ 
      // Add event listener for each select element
  var valgt = document.getElementById("selKomponent" + valgtSel).value;
  console.log(valgt)
  
  navn = komponent[valgtSel][valgt][0];
  pris = komponent[valgtSel][valgt][1];
  bilde = komponent[valgtSel][valgt][3];

  prisArray[valgtSel-1] = komponent[valgtSel][valgt][1]
  navnArray[valgtSel-1] = komponent[valgtSel][valgt][0]
  
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

  totalPris = prisArray[0] + prisArray[1] + prisArray[2] + prisArray[3] + prisArray[4] + prisArray[5] + prisArray[6] + prisArray[7] + prisArray[8] + prisArray[9] + prisArray[10] + 
  prisArray[11] 
  totalPrismoms = (totalPris*1.25)
  document.getElementById("totalpris1").innerHTML = totalPris;
  document.getElementById("totalpris2").innerHTML = totalPrismoms;


  console.log(totalPris)

}

/*--------------Fullstendig PC--------------*/
var verdi1 = 0
var verdi2 = 0
var prisFerdig = 0

function bestillFerdig()
{
  if(document.getElementById("btnRadioKnapp1").checked ||
  document.getElementById("btnRadioKnapp2").checked ||
  document.getElementById("btnRadioKnapp3").checked)
  {
        if(selKomponent13.value && selKomponent14.value && selKomponent15.value == 0)
        {
          verdi2++
          if(verdi2>1)
          {
            bestill2() 
            if(selKomponent13.value == 0)
            {
              skjerm = ""
            }
            else{
              skjerm = linjeskiftKode + "Her er din Skjerm: " + navnArray[1] + "Pris: " + prisArray[13];
              prisFerdig += prisArray[13]
            }
            if(selKomponent14.value == 0)
            {
              mus = ""
            }
            else{
              mus = linjeskiftKode + "Her er din Mus: " + navnArray[14] + "Pris: " + prisArray[14];
              prisFerdig += prisArray[14]
            }
            if(selKomponent15.value == 0)
            {
              tastatur = ""
            }
            else{
              tastatur = linjeskiftKode + "Her er ditt Tastatur: " + navnArray[15] + "Pris: " + prisArray[15];
              prisFerdig += prisArray[15]
            }
          }
          else{
            alert("Er du sikker på at du er ferdig? Du har ikke valgt alle mulighetene om skjerm, tastatur og mus. Trykk igjen på bestill hvis du er sikker på at du er ferdig")
          }
        }
        else{
          alert("Du har valgt riktig")
          bestill2()
        }
      
  }
  else{
    alert("Du har ikke checked av noen av valgene")}
}

var valgtPC = ""
var prisu = 0
var prism = 0

function bestill2()
{
  if(document.getElementById("btnRadioKnapp1").checked)
  {
    valgtPC = "Design"
    prisu = 20481
    prism = 25601.25
    prisFerdig += prism
  }
  else if(document.getElementById("btnRadioKnapp2").checked)
  {
    valgtPC = "Gaming"
    prisu = 18004
    prism = 22505
    prisFerdig += prism
  }
  else(document.getElementById("btnRadioKnapp3").checked)
  {
    valgtPC = "Workstation"
    prisu = 14572
    prism = 18251
    prisFerdig += prism
  }
  var name = mittNavn
  var email = minData
  

  var epostKode = "mailto: ";
  //henter epostadressen fra input
  var mailA = email
  //overskrift på mail
  var emneKode = "?subject=";
  var emne = "Takk for din bestilling av ferdigbygd PC";
  //innholdet i mailen
  var kroppKode = "&body=";
  var overskrift = "Her er din registrerte informasjon";
  var linjeskiftKode = "%0D%0A";

  var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
  linjeskiftKode + "Du har valgt ferdig bygd "+ valgtPC + " PC " + linjeskiftKode  + "Pris: " + prisFerdig + linjeskiftKode + "Din PC vil komme iøpet av 5-7 dager" + linjeskiftKode + linjeskiftKode + "Hilsen BYGGPC"

  + linjeskiftKode 

  //sender mail
  window.location.href = mld;

}




/*----------------------KVITTERING--------------*/
var skjerm = ""
var mus = ""
var tastatur = ""
var linjeskiftKode = "%0D%0A";

/*----Finne totalpris----*/

function bestill1()
{
  console.log(prisArray)
  var name = mittNavn
  var email = minData

var epostKode = "mailto: ";
//henter epostadressen fra input
var mailA = email
//overskrift på mail
var emneKode = "?subject=";
var emne = "Bestilling av egenbygd PC";
//innholdet i mailen
var kroppKode = "&body=";
var overskrift = "Her er din registrerte informasjon";

var mld = epostKode + mailA + emneKode + emne + kroppKode + overskrift + linjeskiftKode + "Navn: " + name + 
linjeskiftKode + "Produktene dine: " + 
linjeskiftKode + "Her er ditt Hovedkort: " + navnArray[0] + " Pris: " + prisArray[0] + 
linjeskiftKode + "Her er din Prossesor: " + navnArray[1] +  " Pris: " + prisArray[1] + 
linjeskiftKode + "Her er din RAM: " + navnArray[2] + " Pris: " + prisArray[2] + 
linjeskiftKode + "Her er ditt Grafikkort: " + navnArray[3] + " Pris: " + prisArray[3] + 
linjeskiftKode + "Her er din Harddisk: " + navnArray[4] + " Pris: " + prisArray[4] + 
linjeskiftKode + "Her er din Strømforskyning: " + navnArray[5] + " Pris: " + prisArray[5] + 
linjeskiftKode + "Her er ditt Nettverkskort " + navnArray[6] + " Pris: " + prisArray[6] + 
linjeskiftKode + "Her er din Vifte " + navnArray[7] + " Pris: " + prisArray[7] + 
linjeskiftKode + "Her er ditt Kabinett " + navnArray[8] + " Pris: " + prisArray[9] + skjerm + mus + tastatur 
+ linjeskiftKode + linjeskiftKode + " Totalpris er " + totalPris + " kr" + linjeskiftKode + "Pris med moms: "+ totalPrismoms + linjeskiftKode + linjeskiftKode + "Din PC vil komme iøpet av 5-7 dager" + linjeskiftKode + linjeskiftKode + "Hilsen BYGGPC"

//sender mail
window.location.href = mld;

}



function bestillPC()
{
    if(selKomponent1.value && selKomponent2.value && selKomponent3.value && selKomponent4.value && selKomponent5.value && selKomponent6.value && selKomponent7.value && selKomponent8.value && selKomponent9.value  == 0)
    {
        alert("Du har ikke valgt riktig greier")
    }
    else{
      if(selKomponent10.value && selKomponent11.value && selKomponent12.value == 0)
      {
        verdi1++
        if(verdi1>1)
        {
          if(selKomponent10.value == 0)
          {
            skjerm = ""
          }
          else{
            skjerm = linjeskiftKode + "Her er din Skjerm: " + navnArray[9] + "Pris: " + prisArray[9]
          }
          if(selKomponent11.value == 0)
          {
            mus = ""
          }
          else{
            mus = linjeskiftKode + "Her er din Mus: " + navnArray[10] + "Pris: " + prisArray[10]
          }
          if(selKomponent12.value == 0)
          {
            tastatur = ""
          }
          else{
            tastatur = linjeskiftKode + "Her er ditt Tastatur: " + navnArray[11] + "Pris: " + prisArray[11]
          }
          bestill1()
        }
        else{
          alert("Er du sikker på at du er ferdig? Du har ikke valgt alle mulighetene om skjerm, tastatur og mus. Trykk igjen på bestill hvis du er sikker på at du er ferdig")
        }
      }
      else{
        alert("Du har valgt riktig")
        bestill1()
        skjerm = linjeskiftKode + "Her er din Skjerm" + navnArray[9] 
        mus = linjeskiftKode + "Her er din Mus" + navnArray[10] 
        tastatur = linjeskiftKode + "Her er ditt Tastatur " + navnArray[11]    
      }
    }
}