const express = require('express')
const app = express()

const PlayerData = require('./manutd.json')

const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("Manchester United Players")
});

app.get('/players',(req,res) => {
    res.send(PlayerData)
})

app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
})