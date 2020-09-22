// from https://www.subsystems.us/uploads/9/8/9/4/98948044/moonphase.pdf
const MOON_ORBIT_IN_DAYS = 29.53;

console.log(getMoonPercent());
console.log(getMoonAgeInDays());

function getMoonAgeInDays(){
   const moonAgeInDays = getMoonPercent() * MOON_ORBIT_IN_DAYS
   
   return moonAgeInDays;
   
   // draw moon ascii ?
   return 
}
function getMoonPercent(){
   const PAST_FULL_MOON = new Date('2000-01-06T12:24:01');
   const seconds = 1000
   const minutes = 60 * seconds
   const hours = 60 * minutes
   const oneDay = 24 * hours
   const daysSinceFullMoon = (Date.now() - PAST_FULL_MOON) / oneDay
   const moonOrbits = daysSinceFullMoon / MOON_ORBIT_IN_DAYS;
   const moonOrbitsFloatingPoint = "0." + moonOrbits.toString().split(".")[1]
   return moonOrbitsFloatingPoint;
 
}

module.exports = {
   getMoonPercent,
   getMoonAgeInDays
}