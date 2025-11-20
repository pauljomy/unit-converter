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
  console.log("Button clicked! Input value:", userInput.value);
  const [meter, feet] = convertMeterFeet(userInput);
  const [liters, gallon] = convertLitersGallon(userInput);
  const [kg, pounds] = convertKgPounds(userInput);

  length.innerHTML = `${userInput.value} meters = ${meter} feet | ${userInput.value} feet = ${feet} meters`;
  volume.innerHTML = `${userInput.value} liters = ${liters} gallons | ${userInput.value} gallons = ${gallon} liters`;
  mass.innerHTML = `${userInput.value} kilos = ${kg} pounds | ${userInput.value} pounds = ${pounds} kilos`;
});

function convertMeterFeet(input) {
  input = Number(input.value);
  const meter = input * 3.281;
  const feet = input / 3.281;
  return [meter.toFixed(3), feet.toFixed(3)];
}

function convertLitersGallon(input) {
  input = Number(input.value);
  const liters = input * 0.264;
  const gallon = input / 0.264;
  return [liters.toFixed(3), gallon.toFixed(3)];
}

function convertKgPounds(input) {
  input = Number(input.value);
  const kg = input * 2.204;
  const pounds = input / 2.204;
  return [kg.toFixed(3), pounds.toFixed(3)];
}
