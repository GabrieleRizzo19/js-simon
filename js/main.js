const numberDiv = document.getElementById("number");
const resultDiv = document.getElementById("result");
const startButton = document.getElementById("start-button");
numberDiv.style.marginBottom = "1.5em";
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

function showFiveRandomNumber(array, HTMLelement){
    for(let i=0; i < array.length; i++){
        HTMLelement.innerHTML += `${array[i]} &nbsp &nbsp`;
    }
    console.log("Showed random number");
}

function displayNone(HTMLelement){
    HTMLelement.style.display = "none";    
}

function displayBlock(HTMLelement){
    HTMLelement.style.display = "block";    
}

function getFiveUserNumber(){
    const array = [];
    for( let i=0; i < 5; i++){
        array.push(parseInt(prompt("Inserisci i numeri in ordine uno per uno")));
    }
    return array;
}

function getResultArray(array1, array2){
    const result = compareArray(array1, array2);
    
    return result;
}

function showResult(array, HTMLelement){
    if(array.length == 0){
        HTMLelement.innerHTML = "Riprova, non hai indovinato nessun numero";
    }else if(array.length == 5){
        HTMLelement.innerHTML = "Complimenti, hai indovinato tutti i numeri!!!";
    }    else{
        // alert(`Hai indovinato ${guessedElementNumber} `)
        HTMLelement.innerHTML = `Hai indovinato ${array.length} numeri e sono: `;
        for( let i=0; i < array.length; i++){
            HTMLelement.innerHTML += `${array[i]} &nbsp`
        }
    }
}

function resetInnerHTML(HTMLelement){
    HTMLelement.innerHTML = "";
}

startButton.addEventListener("click", function(){
    resetInnerHTML(numberDiv);
    resetInnerHTML(resultDiv);

    const fiveRandomNumber = getRandomNumber(5, 1, 50);
    console.log("Five random number: " + fiveRandomNumber);
    
    showFiveRandomNumber(fiveRandomNumber, numberDiv);
    
    setTimeout(function(){
        displayNone(numberDiv);
    }, 2.9 * 1000);
    

    setTimeout(function(){
        console.log("DOPO 4 SECONDI");
        const userNumber = getFiveUserNumber();
        const result = getResultArray(fiveRandomNumber, userNumber);
        showResult(result, resultDiv);
        displayBlock(numberDiv);
    }, 3 * 1000)

})