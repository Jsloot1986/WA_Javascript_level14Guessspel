let name = prompt('wat is je naam?');
alert('Hoi ' + name);
let min= prompt('voer het laagste nummer in bijvoorbeeld 0');

let max= prompt('voer het hoogste nummer in bijvoorbeeld 25');
let guessNumber = prompt('voer een nummer in tussen de'+ min + 'en'+ max +'om te raden, 0 mag niet!');
let fraction = Math.random();
let range = max-min;
let num1 = fraction*range;
let num2 = num1;
if(num2-Math.floor(num2)>=0.5)
    num2=Math.ceil(num2);
else num2=Math.floor(num2);
let guessCount = 1;
if (Math.floor(guessNumber)===Math.floor(num2)){
    alert('Gefeliciteerd! ' + name + 'Je hebt het juiste getal geraden, het spel is afgelopen');
}
let stop = "N";
if (guessNumber == 0){
    alert('Je stop het programma');
    stop = "J";
}
while((stop == "N"&&(guessCount <= 5))){
if(guessNumber===0){
    alert("U stopt het spel, tot snel!");
}else alert("Dit is niet correct");
if(guessCount==5)
    alert("U heeft 5 keer geraden, helaas het spel is afgelopen Tot snel" + name);
    else{
        let guessNumber = prompt('voer een nummer in tussen de'+ min + 'en'+ max +'om te raden, 0 mag niet!');
        if (guessNumber==0){
            stop="J";
            alert ('Het spel is gestopt');
        }else {
            if(Math.floor(guessNumber)===Math.floor(num2)){
                alert("Gefeliciteerd! "+ name+ "je hebt gewonnen, tot de volgende keer");
                stop = "J";

            }
        }
    }
    guessCount++;
}