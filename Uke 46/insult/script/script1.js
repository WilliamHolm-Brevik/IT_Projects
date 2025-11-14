window.onload = insult;

function insult()
{
    //3 arrayer som inneholder ulike ord vi skal bruke
    var randomBodyParts = ["face", "feet", "pikkhue", "hue", "neck"]
    var randomAdjectives = ["smelly", "ugly", "stupid", "tjukk", "jævlig", "mulish"]
    var randoAnimals = ["giraff", "korkodille", "sloth", "tobias analusen", "schwanz"]

    //finder et tilfeldig ord i hver array ved å generere et tilfeldig tall og bruke det som index i array
    //dette tallet kan IKKE overstige lengden til arrayen 

    //generer tilfeldig tall basert på lengden, henter så tilsvarende verdi fra array
    var randomBodyParts =  randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)]
    console.log(randomBodyParts);

    var randomAdjectives =  randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)]
    console.log(randomAdjectives);

    var randoAnimals =  randoAnimals[Math.floor(Math.random() *randoAnimals.length)]
    console.log(randoAnimals);

    var randomInsult = "Your " + randomBodyParts + " is like a " + randomAdjectives + " " + randoAnimals + "!!!"

    document.getElementById("print").innerHTML = randomInsult
    
    



}