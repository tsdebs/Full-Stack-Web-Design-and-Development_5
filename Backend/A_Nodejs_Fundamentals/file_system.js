var fs = require("fs")
var file = fs.readFileSync('test.txt', 'utf-8')
console.log(file)

fs.writeFileSync('test.txt', 'New contents')