#!/usr/bin/env node
const { getMoonAscii } = require("../utils/getMoon");
process && process.argv && process.argv[2]
   ? console.log(getMoonAscii(true))
   : console.log(getMoonAscii())