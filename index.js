const express = require('express')
const path = require('path')

const app = express()

const htmlUrl = __dirname + '/index.html'
console.log(htmlUrl)
app.get('*', (req, res) => {
    res.sendFile(htmlUrl)
})

const port = process.env.PORT || 3000
app.listen(port, () =>console.log(`listening on port ${port}`))
