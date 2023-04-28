const numberDiv = document.getElementById("number");
const resultDiv = document.getElementById("result")
numberDiv.style.fontSize = "64px";
resultDiv.style.fontSize = "32px";


function getRandomNumber(numOfRandom, min, max){
    if(numOfRandom > 1){
        let arrayOfRandom = [];
        let i = 0;
        while(i < numOfRandom){
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!arrayOfRandom.includes(random)){
                arrayOfRandom.push(random);
                i++;
            } 
        }
        return arrayOfRandom;
    }else{
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

const fiveRandom = getRandomNumber(5, 1, 50);
console.log("Numeri generati random: " + fiveRandom);
for(let i=0; i < fiveRandom.length; i++){
    numberDiv.innerHTML += `${fiveRandom[i]} &nbsp &nbsp`;
}

setTimeout(function(){
    numberDiv.style.display = "none";    
}, 4 * 1000);

const userNumber = [];
setTimeout(function(){
    console.log("DOPO 3 SECONDI");
    for( let i=0; i < 5; i++){
        userNumber.push(parseInt(prompt("Inserisci i numeri in ordine uno per uno")));
    }
    console.log("Numeri inseriti: " + userNumber);
    const result = compareArray(fiveRandom, userNumber);
    console.log("Numeri uguali: " + result);
    const guessedElementNumber = result.length;
    console.log("Numero di numeri indovinati: " + guessedElementNumber);
    if(guessedElementNumber == 0){
        alert("Riprova, non hai indovinato nessun numero");
    }else{
        // alert(`Hai indovinato ${guessedElementNumber} `)
        resultDiv.innerHTML = `Hai indovinato ${guessedElementNumber} numeri e sono: `;
        for( let i=0; i < guessedElementNumber; i++){
            resultDiv.innerHTML += `${result[i]} &nbsp`
        }
    }
    numberDiv.style.display = "block";    

}, 5 * 1000);

function compareArray(array1, array2){
    const sameElement = [];
    for(let i=0; i < array1.length; i++){39
        if(array1[i] == array2[i]){
            sameElement.push(array1[i]);
            console.log("Elemento uguale");
        }
    }

    return sameElement;
}