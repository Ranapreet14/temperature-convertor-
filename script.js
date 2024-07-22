document.getElementById('convert-button').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature-input').value;
    const unitSelect = document.getElementById('unit-select').value;
    const result = document.getElementById('converted-temperature');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        result.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;

    if (unitSelect === 'Celsius') {
        convertedTemperature = `${(temperature * 9/5) + 32} °F, ${temperature + 273.15} K`;
    } else if (unitSelect === 'Fahrenheit') {
        convertedTemperature = `${(temperature - 32) * 5/9} °C, ${(temperature - 32) * 5/9 + 273.15} K`;
    } else if (unitSelect === 'Kelvin') {
        convertedTemperature = `${temperature - 273.15} °C, ${(temperature - 273.15) * 9/5 + 32} °F`;
    }

    result.textContent = `Converted temperature: ${convertedTemperature}`;
});
