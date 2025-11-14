var tallListe = [45, 67, 34, 54, 23, 55, 32, 43, 51, 21]

//legge til verdi først 

tallListe.unshift(13);

//fjerner første verdi
tallListe.shift();

//legger en verdi til slutt
tallListe.push(199);

//fjerner siste vrdi
tallListe.pop();

//fjerner et bestemt element(er) - indexplassering, antall, ved kun index > fjern resten

tallListe.splice(2, 1);

tallListe.sort();

//sorterer synkende, gjøres etter sort

tallListe.reverse();

var tekst = "";

//lage DYNAMISK løkke (med length), denne kjøres så mange ganger det er elementer i arrayen

for(var i = 0; i < tallListe.length; i++ )
{
    tekst += "Element nr " + i + " er " + tallListe[i] + " \n";
}

console.log(tekst)

