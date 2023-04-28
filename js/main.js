const numberDiv = document.getElementById("number");

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

let fiveRandom = getRandomNumber(5, 1, 50);
console.log(fiveRandom);
for(let i=0; i < fiveRandom.length; i++){
    numberDiv.innerHTML += `${fiveRandom[i]}, `
}