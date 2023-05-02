const numberDiv = document.getElementById("number"); // DIV FOR SHOW RANDOM NUMBER
const resultDiv = document.getElementById("result"); // DIV FOR SHOW RESULT
const startButton = document.getElementById("start-button"); // START BUTTON

// LOGIC FUNCTION

function getRandomNumber(numOfRandom, min, max){
    if(numOfRandom > 1){
        const arrayOfRandom = [];
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

function showRandomNumber(array, HTMLelement){
    for(let i=0; i < array.length; i++){
        HTMLelement.innerHTML += `${array[i]} &nbsp &nbsp`;
    }
}

function getUserNumber(numberOfElement){
    const array = [];
    for( let i=0; i < numberOfElement; i++){
        array.push(parseInt(prompt("Inserisci i numeri in ordine uno per uno")));
    }
    return array;
}

function compareArray(array1, array2){
    const sameElementArray = [];
    for(let i=0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            sameElementArray.push(array1[i]);
        }
    }
    return sameElementArray;
}

function showResult(array, maxArrayLength, HTMLelement){
    if(array.length === 0){
        HTMLelement.innerHTML = "Riprova, non hai indovinato nessun numero";
    }else if(array.length === maxArrayLength){
        HTMLelement.innerHTML = "Complimenti, hai indovinato tutti i numeri!!!";
    }else if(array.length === 1){
        HTMLelement.innerHTML = `Hai indovinato 1 numero ed è:  ${array[0]}`;
    }else{
        HTMLelement.innerHTML = `Hai indovinato ${array.length} numeri e sono: `;
        for( let i=0; i < array.length; i++){
            HTMLelement.innerHTML += `${array[i]} &nbsp`
        }
    }
}

// LAYOUT SETTINGS FUNCTION

function displayNone(HTMLelement){
    HTMLelement.style.display = "none";    
}

function displayBlock(HTMLelement){
    HTMLelement.style.display = "block";    
}

function resetInnerHTML(HTMLelement){
    HTMLelement.innerHTML = "";
}

function setFontSize(HTMLelement, value){
    HTMLelement.style.fontSize = value;
    console.log("Font size " + HTMLelement + "è" + HTMLelement.style.fontSize.value);
}

function setMarginBottom(HTMLelement, value){
    HTMLelement.style.marginBottom = value;
}

// EVENT LISTENER ON  START BUTTON
startButton.addEventListener("click", function(){
    
    resetInnerHTML(numberDiv);
    resetInnerHTML(resultDiv);
    setFontSize(numberDiv, "64px");
    setFontSize(resultDiv, "32px");
    setMarginBottom(numberDiv, "1.5rem");

    const numberForPlay = parseInt(prompt("Con quanti numeri vuoi giocare?"));
    const timeOfShow = parseInt(prompt("Quanti secondi devono restare visibili i numeri?"));

    const randomNumber = getRandomNumber(numberForPlay, 1, 50);
    
    showRandomNumber(randomNumber, numberDiv);
    
    setTimeout(function(){
        displayNone(numberDiv);
    }, (timeOfShow - 0.1) * 1000);
    

    setTimeout(function(){
        console.log("DOPO 4 SECONDI");
        const userNumber = getUserNumber(numberForPlay);
        const result = compareArray(randomNumber, userNumber);
        showResult(result, numberForPlay, resultDiv);
        displayBlock(numberDiv);
    }, timeOfShow * 1000)

})