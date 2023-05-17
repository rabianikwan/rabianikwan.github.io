const path = require('path')
const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('public'))
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200)
        .sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port)
