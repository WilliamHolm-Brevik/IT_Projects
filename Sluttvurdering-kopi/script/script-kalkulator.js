function regnUt() {
    var binær = document.getElementById("binær").value;
    var binærArray = [];
    var resultat1 = 0;

    for (var i = 0; i < binær.length; i++) {
        binærArray[i] = binær[i];
    }
    binærArray.reverse();

    for (var i = 0; i < binærArray.length; i++) {
        resultat1 += binærArray[i] * (2 ** i);
    }

    document.getElementById("tall").value = resultat1;
}


function regnUt2() {
    var tall = parseInt(document.getElementById("tall").value);
    var binærArray = [];
    var konverterer = 1;
    
    while (tall >= 2**konverterer) {
      konverterer++;
    }
  
    for (var i = konverterer; i >= 0; i--) 
    {
      if (tall >= 2**i) {
        binærArray.push(1);
        tall = tall - 2**i;
      } else {
        binærArray.push(0);
      }
    }
  
    var binær = binærArray.join("");
    document.getElementById("binær").value = binær;
}