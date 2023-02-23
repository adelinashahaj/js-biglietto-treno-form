




var annulla = document.getElementById("annulla");
var ticket = document.getElementById("ticket");

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function () {
        const messaggioDom = document.getElementById('nomeViaggiatore');
        const testoDelMessaggio = messaggioDom.value;
        document.getElementById("nome").innerHTML ="Nome passeggero <br> <br> " + testoDelMessaggio;
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
        document.getElementById("offerta").innerHTML = "Offerta <br> <br>  Minorenne"; 
   
   
         } else if (casellaSelezioneDom.value =="sopra65"){
         prezzo = (prezzo / 100 * 60).toFixed(2);
         sconto = "Hai lo sconto di 40% <br> "; 
          document.getElementById("offerta").innerHTML = "Offerta <br> <br> Senior (Over 65)";   
   
  
         }else {
         prezzo = prezzo.toFixed(2);
          document.getElementById("offerta").innerHTML = "Nessuna <br> offerta";

        }

         console.log(prezzo);
        document.getElementById("costo").innerHTML = `Costo biglietto <br> <br> ${prezzo} euro`;
   
        console.log(kilometri);

    }
   

);
document.getElementById("carrozza").innerHTML = "Carrozza <br><br>"  + Math.ceil((Math.random() * 15) + 1);


document.getElementById("codice").innerHTML ="Codice CP <br><br>" + Math.ceil(Math.random() * (100000 - 90000) + 90000);


annulla.addEventListener('click',
  function() {
    ticket.style.visibility = "hidden";
    document.getElementById("nome").value = "";
    document.getElementById("offerta").value = "";
    document.getElementById("costo").value = "minorenne";
  }
);

