const ejs = require('ejs')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const userSchema = require('./userSchema')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const blogSchema = require('./blogSchema')
//const secretKey = 'myfirstblog'
const secretKey = process.env.SECRETKEY

mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>{
    app.listen(3000, ()=>{
        console.log("App started on port 3000");
    })
}).catch((err)=>{
    console.log(err, "Database connection failed");
})
app.set('view engine','ejs')
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use('/assets', express.static('assets'))

app.get('/', (req,res)=>{
    res.render('index')
})
app.post('/success', (req,res)=>{
    const details = req.body
    run()
    async function run(){
        const blogs = new blogSchema({
            name: details.username,
            title: details.title,
            body: details.body
        })
        await blogs.save()
    }
    res.render('success')
}
)

app.get('/blogs', async(req,res)=>{
    const allPosts = await blogSchema.find()
    res.render('blogs', {posts: allPosts})
})



//register a user
app.post('/register', async(req,res)=>{
    const registrationInfo = req.body
    const password = registrationInfo.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    registerUser()
    async function registerUser(){
        try{
            const user = new userSchema({
                username: registrationInfo.username,
                email: registrationInfo.email,
                password: hashedPassword
            })
            await user.save()
            const payload = {
                user: {
                    email: registrationInfo.email
                }
            }
            const token = await jwt.sign(payload,
                secretKey,{
                    expiresIn: '3600s'
                })
                res.cookie('token', token,{
                    // when hosting change to true
                    httpOnly: false
                })
                res.redirect('/login')
                // res.render('blogs')
        }
        catch(err){
            console.log(err.message)
        }
    }
})
//register route
app.get('/register',(req,res)=>{
    res.render('register')
})
// login route
app.get('/login',(req,res)=>{
    res.render('login')
})
//log out route
app.get('/logout',(req,res)=>{
    res.clearCookie('token')
    res.redirect('/login')
})

// home route
app.get('/', async(req,res)=>{
    const allPosts = await blogSchema.find()
    res.render('index',{posts: allPosts})
})



//addBlog route
app.get('/addBlogs',protectRoute, async(req,res)=>{
    const user = req.user.user.email;
    const aUser = await userSchema.findOne({email:user})
     //console.log(aUser)
     res.render('addBlogs', {username: aUser.username})
 })
 function protectRoute(req,res,next){
     const token = req.cookies.token
    try{
        const user = jwt.verify(token,secretKey)
        req.user = user
        // console.log(req.user)
        next()
     }
     catch(err){
        res.clearCookie('token')
        return res.redirect('/')
     }
    }
    

    


// login in a user
app.post('/login', async(req,res)=>{
    const loginInfo = req.body
    const email = loginInfo.email
    const password = loginInfo.password

    // console.log('from password: ', password)
    userSchema.findOne({email})
    .then((user)=>{
        //console.log("database password:",user.password)
        bcrypt.compare(password,user.password,async(err,data)=>{
            if(err){
                console.log(err);
            }
            if(data){
                console.log(data)
                const payload = {
                    user: {
                        email: user.email
                    }
                }
                const token = await jwt.sign(payload,secretKey,{
                    expiresIn: '3600s'
                })
                 res.cookie('token',token,{
                    // when hosting change to true 
                    httpOnly: false
                 })
                 res.redirect('/addBlogs')
            }
            else{
                res.redirect('/register')
                console.log('wrong password')
            }
        })

    }).catch((err)=>{
        console.log9(err)
    })
})

// const port = process.env.PORT || 3000
// app.listen(port,()=>{
//     console.log(`App started on port 3000 ${port}`);
// })
