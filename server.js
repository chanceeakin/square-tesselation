var express = require('express')

var app = express()

app.use(express.static(process.cwd() + '/examples/basic'))

app.listen(3000, function () {
console.log('App listening on PORT: ' + 3000)
})
