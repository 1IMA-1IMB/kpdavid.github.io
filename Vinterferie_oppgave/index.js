//oppgave a
var vare = "Baguetter";
var pris = 50;

//oppgave b
var melding = ("Hei, og velkommen til kantina! Dagens vare er " + vare + " som koster " + pris + " kr.");
console.log("---OPPGAVE 1b---");
console.log(melding);

//oppgave c
var melding_c = ("Vi har også " + vare + " det koster " + pris + " kr!!");
console.log("---OPPGAVE 1c---");
 vare = "panini";
  pris = 60;
  console.log(melding_c)

  //oppgave d
  vare = "bolle";
  pris = 20;
  melding = ("Hei, og velkommen til Kantina! dagens vare er " + vare + " som koster ") + pris + " kr."
  console.log("---OPPGAVE 1d---");
  console.log(melding)

  //del 2a
  var antallkjøp = 0;
  function kjøp () {
    antallkjøp = antallkjøp + 1;
    console.log(antallkjøp);
  }
  kjøp()

  //oppgave 2b
  console.log(console.log("---OPPGAVE 2b---"))
  function kjøpnoe(ting, beløp) {
    console.log("du har kjøpt " + ting + " til " + beløp + " kr");
  }
  kjøpnoe(vare, pris);

  //oppgave 3a
  console.log(("---OPPGAVE 3a---"))
  var utvalg = ["Baguette", "Panini", "Bolle", "Fruktsalat", "Nudler"];

  //oppgave 3b
  console.log(("---OPPGAVE 3b---"))
  utvalg.push("Brus", "sjokolade");
  console.log(utvalg);

 //oppgave 3c I listen er det teknisk sett 7 ting, men siden listen starter alltid på 0 så er det 6

 //oppgave 3d Det er det tredje tingen, men i listen står det at den er nummer 2 fordi listen starter alltid på 0

 //oppgave 4a
     console.log("\n\n\n---OPPGAVE 4a---");
    let teller = 0;
    while(teller < utvalg.length){
    console.log(utvalg[teller]); 
    teller = teller + 1;
}

//oppgave 4b    
console.log("---OPPGAVE 4b---");

    for(vare in utvalg){
    console.log(utvalg[vare]);
}

//oppgave 4c
console.log("---OPPGAVE 4c---")
let nyTeller = 0;
while(nyTeller < 4){
 console.log(utvalg[nyTeller]);
 nyTeller++;
}

//oppgave 4d
console.log("---OPPGAVE 4d---");
let endaEnTeller = (utvalg.length - 5);
while(endaEnTeller < utvalg.length){
console.log(utvalg[endaEnTeller]);
endaEnTeller++;
}

//Det var noen oppgaver der jeg trengte å bruke fasiten bland annet en hvor jeg hadde gjort alt riktig, men funket ikke. jeg prøvde å se på fasiten, men fant fortsatt ikke feile. fant ut av det til slutt, men utenom det gikk det veldig greit.
  

