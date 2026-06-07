const isDay = false;
const isLightOn = !isDay;

let batteryLevel = 50;
const isWorking = isLightOn && batteryLevel > 0;


console.log("Daytime?");
console.log(isDay);
console.log("Lights On?");
console.log(isLightOn);

console.log(batteryLevel + "%");
console.log("Everything working?");
console.log(isWorking);



