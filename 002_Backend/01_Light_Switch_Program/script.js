const isDay = false;
const isLightOn = !isDay;

let batteryLevel = 50;
const isWorking = isLightOn && batteryLevel > 0;


console.log("Je li sada dan?");
console.log(isDay);
console.log("Jesu li svjetla upaljena?");
console.log(isLightOn);

console.log("Razina baterije " + batteryLevel + "%");
console.log("Sve radi?");
console.log(isWorking);
