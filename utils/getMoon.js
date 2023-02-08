
// Moon calculation from https://www.subsystems.us/uploads/9/8/9/4/98948044/moonphase.pdf

const { moons } = require('../moons/moons');
const { moonEmojis } = require('../moons/moonEmojis');

const NEW_MOON_IN_JULIADN_DAYS =  2451549.5
const MOON_ORBIT_IN_DAYS = 29.53;
const MOON_ORBIT_IN_JULIAN_DAYS = 27.32;
const MOON_ORBIT_IN_JULIAN_DAYS_MILLISECONDS = MOON_ORBIT_IN_JULIAN_DAYS * 24 * 60 * 60 * 1000;
const MOON_ORBIT_IN_MILLISECONDS = MOON_ORBIT_IN_DAYS * 24 * 60 * 60 * 1000;


function getMoonAscii(inverse) {
   const moonAgedInDays = getMoonAgeInDays();
   // map day into 14 moon phases
   const mappedMoonDay = moonAgedInDays.map(0, MOON_ORBIT_IN_DAYS, 0, 28);
   // print moon (reverse string for waxing moons and inverse background option)
   return mappedMoonDay < 14 
      ? inverse
         ? moons[Math.floor(mappedMoonDay)]
            .replace(/M/gm, " ")
            .concat('\nTo a Moon calendar: \nhttps://www.almanac.com/astronomy/moon/calendar')
         : moons[Math.floor(mappedMoonDay)]
         .concat('\nTo a Moon calendar: \nhttps://www.almanac.com/astronomy/moon/calendar')
      : inverse 
         ? moons[Math.floor(Math.abs(28 - mappedMoonDay) )].split("").reverse().join("")
            .replace(/M/gm, " ")
            .concat('\nTo a Moon calendar: \nhttps://www.almanac.com/astronomy/moon/calendar')
         : moons[Math.floor(Math.abs(28 - mappedMoonDay) )].split("").reverse().join("")
            .concat('\nTo a Moon calendar: \nhttps://www.almanac.com/astronomy/moon/calendar')
}

function getMoonAgeInDays(date){
   return getNewMoonInDays(date)
}

function getMoonEmoji(date){

   return moonEmojis[parseInt(getMoonAgeInDays(date))];
}

function getMoonPercent(date){
  
  // getNewMoonInDays returns a range of 0-29.53 days where at ~14.265 the moon is full
  const moonPhaseDayFloat = getNewMoonInDays(date)
  
  // past day 14 is wainning, signed full moon percent is less relevant since it is in a full state
  const isWainning = moonPhaseDayFloat > (MOON_ORBIT_IN_DAYS / 2)
  const moonPhasePercent = (getNewMoonInDays(date) % (MOON_ORBIT_IN_DAYS / 2)) / (MOON_ORBIT_IN_DAYS / 2)

  // return cemetric percent on waining
  return isWainning ? moonPhasePercent - 1 : moonPhasePercent

}

function getNewMoonInDays(date){

  // get the julian day count
  // 🌐 => https://www.subsystems.us/uploads/9/8/9/4/98948044/moonphase.pdf
  // const now = new Date('2017-03-29T12:24:01')
  const SECONDS_IN_A_MINUTE = 60
  const MILLISECONDS_IN_A_SECOND = 60

  const UTCnow = date ? date : new Date()
  const now = new Date(UTCnow - UTCnow.getTimezoneOffset() * SECONDS_IN_A_MINUTE * MILLISECONDS_IN_A_SECOND)
  let Y = now.getFullYear()
  let M = now.getMonth() + 1 // 0 index month
  const D = now.getDate()
  const HOURS_Fraction = now.getHours() / 24
  const MIN_Fraction = now.getMinutes() / 60
  const SECONDS_Fraction = now.getSeconds() / 60

  // If the month is January or February, subtract 1 from the year and add 12 to the month.
  if (M <= 2) {
    Y--
    M += 12
  }

  const A = parseInt(Y / 100)
  const B = parseInt(A / 4)
  const C = 2 - A + B
  const E = parseInt(365.25 * ( Y + 4716))
  const F = parseInt(30.6001 * ( M + 1 ))
  const julianDay = C + D + HOURS_Fraction + MIN_Fraction + SECONDS_Fraction + E + F - 1524.5

  // day since new moon
  const daySinceNewMoon = julianDay - NEW_MOON_IN_JULIADN_DAYS
  const newMoons = daySinceNewMoon / MOON_ORBIT_IN_DAYS

  const newMoonInDays = parseFloat('0.' + newMoons.toString().split('.')[1]) * MOON_ORBIT_IN_DAYS

  return newMoonInDays
}

module.exports = {
   getMoonAscii,
   getMoonPercent,
   getMoonAgeInDays,
   getMoonEmoji,
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
   return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
 }

 