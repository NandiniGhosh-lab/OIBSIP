# Temperature Converter

A simple web tool that converts a temperature value between Celsius, Fahrenheit, and Kelvin, built as part of the Oasis Infobyte Web Development internship (Level 1, Task 3).

## Features
- Enter a temperature value and choose its unit (Celsius, Fahrenheit, or Kelvin)
- Instantly see the converted value in all three units
- Input validation: rejects non-numeric input with an error message
- Handles the absolute zero edge case (values below -273.15°C are rejected)
- Clean, centered, responsive UI

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)

## How to run
Open index.html in any web browser. No installation or server required.

## How it works
1. Type a number into the input field.
2. Select which unit that number is currently in.
3. Click Convert.
4. The result boxes show the equivalent value in Celsius, Fahrenheit, and Kelvin.

## Conversion formulas used
- Celsius to Fahrenheit: F = C * 9/5 + 32
- Fahrenheit to Celsius: C = (F - 32) * 5/9
- Celsius to Kelvin: K = C + 273.15
