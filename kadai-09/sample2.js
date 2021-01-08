const fs = require('fs')
fs.writeFileSync('./kadai-09/hello.text','こんにちは')
const file = fs.readFileSync('./kadai-09/hello.text')
console.log(file.toString())