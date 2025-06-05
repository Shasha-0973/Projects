
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

function convertTemperature() {
    const temp = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;
    if (unit === 'C') {
        // Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
    } else {
        // Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}°${unit === 'C' ? 'F' : 'C'}`;
}

//event listener for the Convert button
convertBtn.addEventListener('click', convertTemperature);
