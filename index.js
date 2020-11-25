const express = require('express')
const { env } = require('process')

const app = express()

app.get('*', (req, res) => {
    res.send('Hellow NODE')
})

const port = process.env.port || 3000
app.listen(port, () =>console.log(`listening on port ${port}`))