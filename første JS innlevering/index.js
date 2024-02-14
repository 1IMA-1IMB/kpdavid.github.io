function convert(type) {
  const inputValue = parseFloat(document.getElementById('valueInput').value);
  const unitFrom = document.getElementById('unitFrom').value;
  const conversionFactors = {
    gallons: 3.78541,
    ounces: 0.0295735,
    cups: 0.236588,
    Spiseskjeer: 0.0147868  
  };
// Jeg har byttet ut inputvalue og de arndre tingene som var der med den jeg hadde før fordi jeg ville se om de virket sånn og fordi koden blir kortere
  let resultat;
  if (type == 'til_liter') {
    resultat = inputValue * conversionFactors[unitFrom];
  } else if (type === 'fra') {
    resultat = inputValue / conversionFactors[unitFrom];
  }

  document.getElementById("result").innerHTML = resultat;
}

//Jeg byttet ut den gammle palindromsjekk koden fordi jeg ikke visste så mye om den, og byttet den ut med koder som jeg skjønner litt mer av som if() og else, men likevel skjønner jeg ikke hva: [^a-z0-9] gjør. jeg så at de bruker den på w3 schools og trodde den var nødvendig
function sjekkPalindrom() {
  const input = document.getElementById('palindromeInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversertInput = input.split('').reverse().join('');

  if (input == reversertInput) {
    visResultat('Det er et palindrom!!');
  } else {
    visResultat('Det er ikke et palindrom.');
  }
}

function visResultat(melding) {
  document.getElementById('palindromeResultat').innerHTML = melding;
}

