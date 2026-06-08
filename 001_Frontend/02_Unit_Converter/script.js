function convert() {

    const inputValue = document.getElementById("userInput").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("resultElement");
    
    let result = 0;
    let resultString = "";

    if (unit === milesToKm) {
        result = inputValue * 1.60934;
        resultString = inputValue + " milja iznosi " + result.toFixed(3) + " km";
        //console.log(resultString);

    } else {
        result = inputValue / 1.60934;
        resultString = inputValue + " km iznosi " + result.toFixed(3) + " milja";
        //console.log(resultString);
    }

    console.log(resultString);
    resultElement.innerHTML = resultString;

}