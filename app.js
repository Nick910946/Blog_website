const express = require("express")
const app = express()
const port = 4000;
const connectDB = require('./db/connectDB')

// web routibg link
const web = require('./routes/web.js')

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

