const express = require('express')
// store all properties of express in a variable to access it.
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my new webapp!</h1>')
})

app.get('/about', (req,res)=>{
    res.send('<p>Thia is the about page!</p>')
})

app.listen(3000, ()=>{
    console.log('App is connected on port 3000')
})

