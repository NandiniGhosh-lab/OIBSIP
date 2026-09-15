const tempValue = document.getElementById('tempValue');
const unitFrom = document.getElementById('unitFrom');
const convertBtn = document.getElementById('convertBtn');
const errorMsg = document.getElementById('errorMsg');
const resC = document.getElementById('resC');
const resF = document.getElementById('resF');
const resK = document.getElementById('resK');

convertBtn.addEventListener('click', () => {
  errorMsg.textContent = '';
  const rawValue = tempValue.value.trim();

  // Validation: must be a number
  if (rawValue === '' || isNaN(rawValue)) {
    errorMsg.textContent = 'Please enter a valid number.';
    resC.textContent = '--';
    resF.textContent = '--';
    resK.textContent = '--';
    return;
  }

  const value = parseFloat(rawValue);
  const unit = unitFrom.value;

  // Step 1: convert whatever was entered into Celsius first
  let celsius;
  if (unit === 'C') {
    celsius = value;
  } else if (unit === 'F') {
    celsius = (value - 32) * 5 / 9;
  } else if (unit === 'K') {
    celsius = value - 273.15;
  }

  // Edge case: below absolute zero
  if (celsius < -273.15) {
    errorMsg.textContent = 'Temperature cannot be below absolute zero (-273.15°C).';
    resC.textContent = '--';
    resF.textContent = '--';
    resK.textContent = '--';
    return;
  }

  // Step 2: convert Celsius into the other two units
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  resC.textContent = celsius.toFixed(2) + ' °C';
  resF.textContent = fahrenheit.toFixed(2) + ' °F';
  resK.textContent = kelvin.toFixed(2) + ' K';
});