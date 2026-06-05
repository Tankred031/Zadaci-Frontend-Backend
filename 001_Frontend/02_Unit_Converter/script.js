inputValue = 10;
milesToKm = false;

result = 0;

if (milesToKm){
    inputValue = result * 1.60934;
} else {
    inputValue = result / 1.60934;
}

const resultString = inputValue + " miles are " + result + " km";
console.log(resultString);

const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;