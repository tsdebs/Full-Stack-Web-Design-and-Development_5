var express = require('express')
var classwork = express()
classwork.get('/',(home,res)=>{
    res.send('<h1>Today We Learnt About Creating Routers</h1>')
})
classwork.get('/contact',(home,res)=>{
    res.send('h1>Contact us here!</h1>')
})



classwork.listen(2000,()=>{
    console.log('Classwork on creating routers')
})