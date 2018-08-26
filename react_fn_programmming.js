// ...

// function directions(...args) {
//   let [finish, ...stops] = remaining.reverse()
//
//   let [start, ...remaining] = args
//   console.log(`drive trough ${args.length} towns`);
//   console.log(`start in ${start}`);
//   console.log(`the destination is ${finish}`);
//   console.log(`stopping ${stops.length} times in between`);
// }
//
// directions (
//   "Truckee",
//   "Tahoe City",
//   "Sunnyside",
//   "Homewood",
//   "Tahoma"
// )


// PROMISES

// const getFakeMember = count => new Promise((resolves, rejects) => {
//   const api = `https://api.randomuser.me/?nat=US&results=${count}`
//   const request = new XMLHttpRequest()
//   request.open("GET", api)
//   request.onload = () =>
//       (request.status === 200) ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText))
//   request.onerror = (err) => rejects(err)
//   request.send()
// })
//
// getFakeMember(5).then(
//   members => console.log(members),
//   err => console.error(
//     new Error("Cannot load members from randomuser.me")
//   )
// )


// FUNCTIONS NESTED IN OBJECTS

// class Vacation {
//   constructor (location, length) {
//     this.location = location
//     this.length = length
//   }
//
//   print() {
//     console.log(`The trip will be in ${this.location} for ${this.length} days`);
//   }
// }
// var macau = new Vacation("Macau", 5)
//
// macau.print()
//
// class Expedition extends Vacation {
//   constructor(location, length, gear) {
//     super (location, length)
//     this.gear = gear
//   }
//   print() {
//     super.print()
//     console.log(`Bring your ${this.gear.join(" and your ")}`);
//   }
// }
//
// var trip = new Expedition("Mt Whitney", 2, ["sunscreen", "sunglasses", "compass"])import { print, log, sum } from "./modules";

// trip.print()


// FUNCTIONS WITHIN ARRAYS

// const messages = [
//   "lol",
//   message => console.log(message),
//   "lol2",
//   message => console.log(message)
// ]
//
// messages[1](messages[0])
// messages[3](messages[2])


// const insideFn = logger =>
//   logger("They can be sent to other functions as arguments");
//
// insideFn(message => console.log(message))


// FUNCTIONAL PROGRAMMING

// var createScream = (logger) => {
//   return (message) => {
//     logger(message.toUpperCase() + "!!!")
//   }
// }
//
// var createScream2 = logger => message => logger(console.log(message.toUpperCase() + "!!!"))
//
// var scream = createScream(message => console.log(message))
// var scream2 = createScream2(message => console.log(message))
//
// scream("hello world")
// scream2("hello world")


// IMPERATIVE PROGRAMMING

// var string = "This is the midday show with..."
// var urlFriendly = " "
//
// for (var i = 0; i < string.length; i++) {
//   if (string[i] === " ") {
//     urlFriendly += "-";
//   } else {
//     urlFriendly += string[i]
//   }
// }
//
// console.log(urlFriendly);


// DECLARATIVE PROGRAMMING

// const string = "This is the midday show with..."
// const urlFriendly = string.replace(/ /g, "-")
//
// console.log(urlFriendly);


// IMMUTABILITY

// let color_lawn = {
//   title: "lawn",
//   color: "#00FF00",
//   rating: 4
// }
//
// const rateColor = (color, rating) => {
//   return Object.assign({}, color, {rating: rating});
// }
//
// let newLawn = rateColor(color_lawn, 5).rating
// console.log(newLawn)
// console.log(color_lawn.rating);

// let list = [
//   {title: "Rad Red"},
//   {title: "Lawn"},
//   {title: "Party Pink"}
// ]
//
// var addColor = (title, colors) => colors.concat({title})
//
// console.log(list.length);
// console.log(addColor("Red", list).length);
// console.log(list.length);


// PURE FUNCTIONS

//   name: "fedrerick",
// var frederick = {
//   canRead: false,
//   canWrite: false
// }
//
// console.log(frederick);
//
// var selfEducate = person => ({
//   ...person,
//   canRead: true,
//   canWrite: false
// })
//
// console.log(selfEducate(frederick));



// 24/8/2018





//  DATA TRANSFORMATION

// var names = "Briana  Ghislaine  Nicol  Gussie  Anglea  Eileen  Willy  Jenelle  Malisa  Mack  Lashawn  Easter  Blake  Marcelle  Evia  Yasmine Janel   Adriana  Florentina  Tenisha"
//
// let schools  = [
//   "Yorktown",
//   "Lee",
//   "Wakefield"
// ]
//
// namesArray = names.split("  ")
//
// console.log(namesArray);
// console.log(namesArray.join(", "))

// FILTERS A NAME THAT STARTS WITH AN SPECIFIC LETTER (ARRAY.FILTER)

// let filterNames = (array, letter) => {
//   let filtered_name = array.filter(name => name[0] === letter)
//
//   let answer = "The names that start with the letter " + letter + " are " + filtered_name.join(", ")
//
//   return answer;
// }
//
// console.log(filterNames(namesArray, "G"));


// FILTERS OUT AN SPECIFIC NAME (ARRAY.FILTER)

// let cutList = (cut, list) =>
//   list.filter(item => item !== cut)
//
// console.log(cutList("Briana", namesArray).join(" * "));


// MAP() TO APPEND TEXT TO AN ARRAY OBJECT

// let highSchools = schools.map(school => `${school}` + " High School")
//
// console.log(highSchools.join("\n"));


// MAP() TO RETURN AN OBJECT

// let high_schools = schools.map(school => ({name: school}))
//
// console.log(high_schools);


// MAP() TO CHANGE NAMES WITHOUT MUTATING ORIGINAL ARRAY

// let schools_ = [
//   {name: "Yorktown"},
//   {name: "Stratford"},
//   {name: "Lee"},
//   {name: "Wakefield"}
// ]
//
// console.log(schools_);
// console.log("===========");
//
//   const editName = (oldName, name, array) =>
//   array.map(item => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name
//       }
//     } else {
//       return item;
//     }
//   })

// const editName = (oldName, name, array) =>
//   array.map(item => (item.name === oldName) ?
//   ({...item, name}) :
//   item
// )

// let updatedSchools = editName("Stratford", "HB Woodlawn", schools_)
//
// console.log(updatedSchools);
// console.log("===========");
// console.log(updatedSchools[1]);
// console.log("===========");
// console.log(schools_);


// MAP() TO TRANSFORM AN ARRAY INTO AN OBJECT USING OBJECT.KEYS()

// const schools = {
//   "Yorktown": 10,
//   "Lee": 2,
//   "Wakefield": 5
// }
//
// const schoolArray = Object.keys(schools).map(key =>
//   ({
//     name: key,
//     wins: schools[key]
//   })
// )
//
// console.log(Object.keys(schools));
// console.log(schoolArray);


// .REDDUCE() TO FIND GREATEST NUMBER IN AN ARRAY

// const ages = [21, 18, 42, 40, 64, 63, 34]

// const maxAge = ages.reduce((max, age) => {
//   console.log(`${age} > ${max} = ${age > max}`);
//   if (age > max) {
//     return age;
//   } else {
//     return max;
//   }
// }, 0)

// const max = ages.reduce((max, value) => (value > max) ? value : max, 0)
//
// console.log("maxAge", max);


//
//
// const colors = [
//   {
//     id: "-xekare",
//     title: "rad red",
//     rating: 3
//   },
//   {
//     id: "-jbwsof",
//     title: "big blue",
//     rating: 2
//   },
//   {
//     id: "-prigbj",
//     title: "grizzly grey",
//     rating: 5
//   },
//   {
//     id: "-ryhbhsl",
//     name: "banana",
//     rating: 1
//   }
// ]
//
// const hashColors = colors.reduce(
//   (hash, {id, title, rating}) => {
//     hash[id] = {title, rating}
//     return hash;
//   },
//   {}
// )

// console.log(hashColors);

// let colors_ = ["red", "red", "green", "blue", "green"]
//
// const distinctColors = colors_.reduce(
//   (distinc, color) =>
//     (distinc.indexOf(color) !== -1) ?
//       distinc :
//       [...distinc, color],
//   []
// )
//
// console.log(distinctColors);




// 25/8/2018




// HIGHER ORDER FUNCTIONS

// const invokeIf = (condition, fnTrue, fnFalse) =>
//   (condition) ? fnTrue() : fnFalse()
//
// const show_welcome = () =>
//   console.log("Welcome!");
//
// const show_unauthorized = () =>
//   console.log("Unauthorized!");
//
// invokeIf(true, show_welcome, show_unauthorized)
// invokeIf(false, show_welcome, show_unauthorized)


// RECURSIVE FUNCTIONS

// COUNTDOWN 10 TO 0 WITHOUT FOR LOOP

// let countdown = (value, fn) => {
//   fn(value)
//   return (value > 0) ? countdown(value - 1, fn) : value;
// }
//
// countdown(10, value => console.log(value))

// COUNTDOWN 10 TO 0 WITH 1 SECOND DELAY

// const countdown = (value, fn, delay=1000) => {
//   fn(value)
//   return (value > 0) ?
//     setTimeout(() => countdown(value-1, fn, delay), delay) :
//     value
// }
//
// let log = value => console.log(value);
// countdown(10, log)

// RECURSION AND ITIRATION TROUGH AN OBJECT TO ACCES ITS COMPONENTS

// let dan = {
//   type: "person",
//   data: {
//     gender: "male",
//     info: {
//       id: 22,
//       fullname: {
//         first: "Dan",
//         second: "Deacon"
//       }
//     }
//   }
// }
//
// let deep_pick = (fields, object={}) => {
//   let [first, ...remaining] = fields.split(".")
//   return (remaining.length) ?
//     deep_pick(remaining.join("."), object[first]) :
//     object[first]
// }
//
// console.log(deep_pick("type", dan));
// console.log(deep_pick("data.info.fullname.first", dan));


// COMPOSITION

// REPLACING STRING BY CHAINING REPLACE FUNTIONS

//   const template = "hh:mm:ss tt"
//   const clockTime = template.replace("hh", "03")
//         .replace("mm", "33")
//         .replace("ss", "33")
//         .replace("tt", "PM")
//
// console.log(clockTime);


// COMPOSING FUNCTIONS

// const compose = (...fns) =>
//   (arg) =>
//     fns.reduce(
//       (composed, f) => f(composed),
//       arg
//     )


// FIRST APP: TICKING CLOCK => REGULAR WAY

// setInterval(logClockTime, 1000);
//
// function logClockTime() {
//
//   // Get time string as civilian time
//   let time = getCLockTime()
//
//   // Clear console and log time
//   console.clear()
//   console.log(time);
// }
//
// function getCLockTime() {
//
//   // Get current time
//   let date = new Date()
//   var time = ""
//
//   // Serialize clock time
//   var time = {
//     hours: date.getHours(),
//     mins: date.getMinutes(),
//     secs: date.getSeconds(),
//     ampm: "AM"
//   }
//
//   // Convert to civilian time
//   if (time.hours == 12) {
//     time.ampm = "PM";
//   } else if (time.hours > 12) {
//     time.ampm = "PM"
//     time.hours -= 12
//   }
//
//   // Prepend 0 to the hours to make double digits
//   if (time.hours < 10) {
//     time.hours = "0" + time.hours;
//   }
//
//   // Prepend 0 to the mins to make double digits
//   if (time.mins < 10) {
//     time.mins = "0" + time.mins
//   }
//
//   // Prepend 0 to the hours to make double digits
//   if (time.secs < 10) {
//     time.secs = "0" + time.secs
//   }
//
//   // Format the clock time as a string "hh:mm:ss tt"
//   return time.hours + ":"
//         + time.mins + ":"
//         + time.secs + " "
//         + time.ampm
// }




// 26/08/18




// TICKING CLOCK => FUNCTIONAL WAY

// const oneSec = () => 1000
// const getCurrentTime = () => new Date()
// const clear = () => console.clear()
// const log = message => console.log(message);
//
// const compose = (...fns) =>
//   (arg) =>
//     fns.reduce(
//       (composed, f) => f(composed),
//       arg
//     )
//
//
// const serializeClockTime = date => ({
//   hours: date.getHours(),
//   mins: date.getMinutes(),
//   secs: date.getSeconds()
// })
//
// const civilianHours = clockTime => ({
//   ...clockTime,
//   hours: (clockTime.hours > 12) ?
//     clockTime.hours - 12 :
//     clockTime.hours
// })
//
// const appendAMPM = clockTime => ({
//   ...clockTime,
//   ampm: (clockTime.hours >= 12) ? "PM" : "AM"
// })
//
// const display = target => time => target(time)
//
// const formatClock = format =>
//   time =>
//     format.replace("hh", time.hours)
//           .replace("mm", time.mins)
//           .replace("ss", time.secs)
//           .replace("tt", time.ampm)
//
// const prependZero = key => clockTime => ({
//   ...clockTime,
//   [key]: (clockTime[key] < 10) ?
//     "0" + clockTime[key] :
//     clockTime[key]
// })
//
// const convertToCivilianTime = clockTime =>
//   compose(
//     appendAMPM,
//     civilianHours
//   )(clockTime)
//
// const doubleDigits = civilianTime =>
//   compose(
//     prependZero("hours"),
//     prependZero("mins"),
//     prependZero("secs")
//   )(civilianTime)
//
// const startTicking = () =>
//   setInterval(
//     compose(
//       clear,
//       getCurrentTime,
//       serializeClockTime,
//       convertToCivilianTime,
//       doubleDigits,
//       formatClock("hh:mm:ss tt"),
//       display(log)
//     ),
//     oneSec()
//   )
//
// startTicking()


// PURE REACT!
