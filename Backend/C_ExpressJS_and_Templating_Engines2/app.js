const ejs = require("ejs")
const express = require("express")
const app = express()
app.listen(3005, ()=>{
    console.log("App connected on port 3005")
})

app.set("view engine","ejs")
// middleware
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    const name = "Deborah"
    const nickname = "Debs"
    const arr = ["HTML","CSS","javascript","Nodejs"]
    res.render("index", {data: name,arr,nickname})
})
app.get("/contact",(req,res)=>{
    console.log(req.body)
    // console.log(req.body)

    res.render("contact")
})
app.post("/success",(req,res)=>{
    console.log(req.body)
    res.render("success", {data: req.body})
})