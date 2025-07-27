function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result = "";

  if (isNaN(inputTemp)) {
    result = "Enter a valid number.";
  } else {
    let tempInCelsius;

    // Convert from input to Celsius
    if (fromUnit === "Celsius") tempInCelsius = inputTemp;
    else if (fromUnit === "Fahrenheit") tempInCelsius = (inputTemp - 32) * 5 / 9;
    else if (fromUnit === "Kelvin") tempInCelsius = inputTemp - 273.15;

    // Convert from Celsius to desired output
    if (toUnit === "Celsius") result = tempInCelsius;
    else if (toUnit === "Fahrenheit") result = tempInCelsius * 9 / 5 + 32;
    else if (toUnit === "Kelvin") result = tempInCelsius + 273.15;

    result = `${result.toFixed(2)} °${toUnit}`;
  }

  document.getElementById("result").textContent = result;
}

