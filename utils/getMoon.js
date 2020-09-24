
// Moon calculation from https://www.subsystems.us/uploads/9/8/9/4/98948044/moonphase.pdf

const { moons } = require('../moons/moons');
const { moonEmojis } = require('../moons/moonEmojis');

const MOON_ORBIT_IN_DAYS = 29.53;

function getMoonAscii() {
   const moonAgedInDays = getMoonAgeInDays();
   // map day into 14 moon phases
   const mappedMoonDay = moonAgedInDays.map(0, MOON_ORBIT_IN_DAYS, 0, 28);
   // print moon
   console.log(moons[Math.floor(mappedMoonDay < 14 ? mappedMoonDay : 28 - mappedMoonDay )])
   console.log('to a Moon calendar: https://www.almanac.com/astronomy/moon/calendar')
}

function getMoonAgeInDays(){
   const moonAgeInDays = getMoonPercent() * MOON_ORBIT_IN_DAYS
   
   return moonAgeInDays;
   
}

function getMoonEmoji(){
   const moonAgeInDays = getMoonPercent() * MOON_ORBIT_IN_DAYS
   return moonEmojis[Math.floor(moonAgeInDays)];
   
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
   getMoonAscii,
   getMoonPercent,
   getMoonAgeInDays,
   getMoonEmoji
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
   return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
 }

 