#!/usr/bin/env node
const {getMoonAscii, getMoonPercent, getMoonAgeInDays, getMoonEmoji} = require('./utils/getMoon.js')

module.exports = {
    getMoonAscii,
    getMoonPercent,
    getMoonAgeInDays,
    getMoonEmoji,
}

console.log('getMoonPercent', getMoonPercent())
console.log('getMoonAgeInDays', getMoonAgeInDays())