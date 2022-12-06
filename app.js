const express = require("express")
const app = express()
const port = 4000;
const connectDB = require('./db/connectDB')
const bodyParser=require("body-parser")
const fileUpload = require("express-fileupload");
const session = require('express-session')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')

// web routibg link
const web = require('./routes/web.js')

// body parser json se data laane k liye
app.use(bodyParser.urlencoded({extended:false}))

//session message
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  
//flash message
  app.use(flash());

// File upload
app.use(fileUpload({useTempFiles: true}));

//cookie
app.use(cookieParser())


//load router
app.use('/',web)

//============setup ejs=======
app.set('view engine','ejs')

//link public folder
app.use(express.static('public'))

//DB connection
connectDB();






app.listen(port,()=>{
    console.log(`Server strated on localhost:${port}`)
})

