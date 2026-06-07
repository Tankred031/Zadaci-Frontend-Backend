function convert() {

    let inputValue = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    const milesToKm = (unit === 'milesToKm');

    let result = 0;

    if (milesToKm === true) {
        result = inputValue * 1.60934;

        const resultString = inputValue + " milja iznosi " + result.toFixed(3) + " km";
        console.log(resultString);

        const resultElement = document.getElementById("resultElement");
        resultElement.innerHTML = resultString;


    } else {
        result = inputValue / 1.60934;
    }

    const resultString = inputValue + " km iznosi " + result.toFixed(3) + " milja";
    console.log(resultString);

    const resultElement = document.getElementById("resultElement");
    resultElement.innerHTML = resultString;

}