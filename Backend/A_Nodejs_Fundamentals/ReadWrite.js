var fs = require('fs')
var object = fs.readFileSync('print.txt', 'utf-8')
console.log(object)
fs.writeFileSync('print.txt','Good Evening')