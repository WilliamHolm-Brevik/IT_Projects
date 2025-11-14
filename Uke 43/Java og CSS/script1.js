
let gulSkrift = document.getElementById("gul");
console.log(gulSkrift)

gulSkrift.addEventListener("click", byttTilGul);

function byttTilGul(){
    gulSkrift.setAttribute("class", "gul");
}
//endring til groennSkrift

let groennSkrift = document.getElementById("groenn");

groennSkrift.addEventListener("click", byttTilGroenn);

function byttTilGroenn(){

    groennSkrift.setAttribute("class", "groenn");

}

//endring til blaaSkrift

let blaaSkrift = document.getElementById("blaa");

blaaSkrift.addEventListener("click", byttTilBlaa);

function byttTilBlaa(){

    blaaSkrift.setAttribute("class", "blaa");

}

let bakgrunn = document.getElementById("bg");

bakgrunn.addEventListener("click", byttBakgrunn);

function byttBakgrunn(){

    bakgrunn.setAttribute("class", "bg");

}

let font = document.getElementById("font1");

font.addEventListener("click", byttFont);

function byttFont(){

    font.setAttribute("class", "font1");

}

let skriftStørrelse = document.getElementById("font2");

skriftStørrelse.addEventListener("click", byttStørrelse);

function byttStørrelse(){

    skriftStørrelse.setAttribute("class", "font2");

}





