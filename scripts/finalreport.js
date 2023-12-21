// Function to convert temperature range based on scale
function convertTemperatureRange() {
    // Get user input from the form
    const startTemp = document.getElementById("startTemp").value;
    const endTemp = document.getElementById("endTemp").value;
    const scale = document.getElementById("rangeScale").value;

    let result = "";

    // Loop through the temperature range
    for (let i = startTemp; i <= endTemp; i++) {
        // Check the scale and perform the conversion
        if (scale === "C") {
            let convertedTemperature = (i * 9/5) + 32;
            result += `<li>${i}° Celsius is ${convertedTemperature.toFixed(2)}° Fahrenheit</li>`;
        } else if (scale === "F") {
            let convertedTemperature = (i - 32) * 5/9;
            result += `<li>${i}° Fahrenheit is ${convertedTemperature.toFixed(2)}° Celsius</li>`;
        }
    }
    for (let i = startTemp; i >= endTemp; i--) {
        // Check the scale and perform the conversion
        if (scale === "C") {
            let convertedTemperature = (i * 9/5) + 32;
            result += `<li>${i}° Celsius is ${convertedTemperature.toFixed(2)}° Fahrenheit</li>`;
        } else if (scale === "F") {
            let convertedTemperature = (i - 32) * 5/9;
            result += `<li>${i}° Fahrenheit is ${convertedTemperature.toFixed(2)}° Celsius</li>`;
        }
    }

    // Display the converted temperatures in the designated container
    document.getElementById("conversionResults").innerHTML = result;
}