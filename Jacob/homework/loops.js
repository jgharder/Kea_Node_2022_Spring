const carBatteries = [0.3, 0.6, 0.5, 0.4]

const chargedCarBatteries = carBatteries.map(element => element+0.2);
    

console.log(chargedCarBatteries);



carBatteries.forEach((element, index) => console.log(`Car nr: ${index + 1}   
`));


const drainedBatteries = carBatteries.filter(battery => battery < 0.5);

console.log(drainedBatteries);