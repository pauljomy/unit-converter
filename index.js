/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert");

convertBtn.addEventListener("click", () => {
  const [meter, feet] = convertMeterToFeet(userInput.value);
  console.log(meter, feet);
});

function convertMeterToFeet(input) {
  input = Number(input.value);
  const meter = input * 3.281;
  const feet = input / 3.281;
  return [meter, feet];
}
