[![https://www.npmjs.com/package/get-the-moon](https://img.shields.io/npm/v/get-the-moon)](https://www.npmjs.com/package/get-the-moon)

# 🌔 Get The Moon!
###### (Example package for npm deployment)

##### And also, to get the current Moon phase in Javascript or the command line.

## Install
`npm i get-the-moon`

or globaly (to use in the command line)

`npm i get-the-moon -g`

## Usage

```js
const moon = require("get-the-moon");
console.log(moon.getMoonEmoji()) // 🌔 (according to the Moon phase)
```

## Methods

**moon.getMoonPercent** returns  \<*Number*> // floating point 
```js
console.log(Moon.getMoonPercent()) // 0.251490505183 (according to the Moon phase)
```

**moon.getMoonAgeInDays** returns  \<*Number*> // floating point 
```js
console.log(moon.getMoonAgeInDays()) // 7.4271304513887895 (according to the Moon phase)
```

**moon.getMoonEmoji** returns  \<*String*> // unicode emoji
```js
console.log(moon.getMoonEmoji()) // 🌔 (according to the Moon phase)
```

**getMoonAscii** returns  \<*String*> // and consoles the Ascii moon phase
```js
console.log(Moon.getMoonAscii([<Bool>])) // accepts an optional Boolean to inverse the Ascii background Characters (ASCII art according to the Moon phase)

// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmdyyyssshhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNNmdhhyss+/::::+shNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmddhyyys+/-:---.-:ohNMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdmddhys+///::::::--//+smMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmddhhyo+//:/::/:::::-./smMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmmddhyso++/////:::-:--.-+hNMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmmmddhhyso+++///////:-----..:yNMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmmddhhhyooo+o++/://///:/:--.'.:hNMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmddhhhhysssooo++/////:/::--.'.'./dMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmdddhddsysssso++//:+/:::-:----.''.oNMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmdmmddhhdhyyyyyyo+/+////::..:----..''/mMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmNMMNNmdddhyyyyyoo+/:::/::----::-..'''-hMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMNNmmddyossso++/:::-::-------..''' .yMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMNmdmdhsso++///::---:--:-.----.'  .yMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmmmmmhyo+////:/:::::/:::::---.' '.hMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmmddmdys++/////+///:/:++++///-.'''-mMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmNmddmdhsoooso//+//::/ooo+oooo:-'..-/NMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmmddmmhyssyss++/:---:+ooooosoo-.--::hMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMNNNNNmmmdhyyyyhyo+/:-'-:oooosss::.'--+/NMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNddmmNmNmmmmdhhhhhyo///..-/+ooooo-.-..'--yMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMNmmmMNNNmmddddddddyys+/-.--/+/:---:-.''-+MMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmdNMNMNmddmmddddhhyy+++/:-------/-+:.' ':NMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmdmmMMNmmNmmddddhhhyoso++o//-----.::-'''./dMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmdddmNmmmNmmmddhhyyyyss+++osso+:::-/:.--'-/hMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmdddddmmNmNmdmdhhhhyyhyso+sosssssso/:/:-..'-:yMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmNdhhddddhmNmdddddho++soooosssssssso++::.-..'--hMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNmhhdhyhhhhhhddhdo++o++++ssssossoo+///---....-dMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNmmddhhyyososyhhyoo+++++++osssosoo+/:--.-.'''.mMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMNmmdddhyy+ssyhyyso+o+:://ooososso//-''.'.''''/NMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNdddddhhyy+ssysssso+++//::/+/oooo+/:-......'''yMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmmmmdhhsy++o++ssooosso+/:-/+///+/+::--.-.'''-NMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNmNmddhysyoo/+/o+oosssoo/:::/::-://:-::.-.'''hMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNmddhhyso+/+/:+ossssss::/+::////:--:--.'''+MMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNmdhdhhhyo++o::/+ooosss/////:/+/-''.-...'':mMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNmddhdyyoo+o/////o++//+/:::--:-..'....''.dMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMNmdhhyyysoo/+://+///://:---.....'''''.'.hMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNNmmhhhhsyoo+://///:/://::-..'''''''''..-hMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmMmmmhdhhhhyo+o++//:////:::::.' '  '''''./mMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmmmmmddddhyyos+++++/+//::-:--.''' ..''..oNMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMmmmmddhydssoo+o+++++//::----.'''...../hMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmNmNdhhhhyssooo++///:/::---.--------omMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNmmmdddhhssoo++++//::::---:------:+dMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNdNmmdyhdsyooo+++/::--:--::----:odNMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdmddhdhyyoo++///::--::----:/smMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNhNhmyhhshoo/+///:::/::-::+hNMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNmmdddhhyss++++///:-:-:+ymMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMmmmhdhyyso++//::::/sdNMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmNmdhyyss+////+ydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMmhysyyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

```

#### ASCII tools shoutouts 💎
- web: https://www.text-image.com/convert/ascii.html
- npm: https://www.npmjs.com/package/asciify-image
- npm https://www.npmjs.com/package/image-to-ascii
#### Command Line Methods
```sh
$ moon [-inverse] (getMoonAscii) //return <String> and prints the Ascii Moon
```
```sh
$ getMoon [-inverse] (getMoonAscii) //return <String> and prints the Ascii Moon
```
```sh
$ getMoonAscii [-inverse] //return <String> and prints the Ascii Moon
```
```sh
$ getMoonEmoji //return <String> Moon emoji acording to moon phase 
```
```sh
$ getMoonPercent // returns <Number> floating point acording to moon phase
```
```sh
$ getMoonAgeInDays // returns <Number> floating point acording to moon phase
```

## Contributing

Please feel free to contribute to this project! Pull requests and feature requests are welcome via Issues!

## License
get-the-moon is distributed under The [MIT License](https://opensource.org/licenses/MIT)