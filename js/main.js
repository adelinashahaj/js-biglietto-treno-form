
/*
let etaViaggiatore = "";
let kilometri = "";


let prezzo = kilometri * 0.21;
let sconto = ""; 

if (etaViaggiatore < 18){
    prezzo = (prezzo / 100 * 80).toFixed(2);
    sconto = "Hai lo sconto di 20% <br> ";    
   
} else if (etaViaggiatore > 65){
    prezzo = (prezzo / 100 * 60).toFixed(2);
    sconto = "Hai lo sconto di 40% <br> ";    
   
  
}else {
    prezzo = prezzo.toFixed(2);

}

document.getElementById("biglietto").innerHTML = sconto + "Il biglietto costa: "  + prezzo + "€";
*/




const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function () {
        const messaggioDom = document.getElementById('nomeViaggiatore');
        const testoDelMessaggio = messaggioDom.value;
        const kilometriDom = document.getElementById('kilometri');
        const kilometri = kilometriDom.value;
        console.log(kilometri);
        const casellaSelezioneDom = document.getElementById('casellaSelezione');
        console.log(casellaSelezioneDom.value);
        let nomeViaggiatore = "";



let prezzo = kilometri * 0.21;
let sconto = ""; 

if (casellaSelezioneDom.value == "sotto18"){
    prezzo = (prezzo / 100 * 80).toFixed(2);
    sconto = "Hai lo sconto di 20% <br> ";    
   
} else if (casellaSelezioneDom.value =="sopra65"){
    prezzo = (prezzo / 100 * 60).toFixed(2);
    sconto = "Hai lo sconto di 40% <br> ";    
   
  
}else {
    prezzo = prezzo.toFixed(2);

}

console.log(prezzo);
console.log(kilometri);

    }

);

/*
const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const messaggioDom = document.getElementById('etaViaggiatore');
        messaggioDom.value = "";
    }
);
*/

const domElement = document.querySelector('#generatoreCasuale');

domElement.addEventListener('click', 
    function() {
        const numeroCasuale = Math.floor((Math.random() * 901)) + 100;
       console.log(numeroCasuale);
    }
);