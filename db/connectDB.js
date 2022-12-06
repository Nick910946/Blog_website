const mongoose = require('mongoose')
const url = 'mongodb+srv://Nikhil910:Nikhil1234@cluster0.dvxk3u4.mongodb.net/blogwebsiteDB?retryWrites=true&w=majority'
const connectDB = () =>{
    // return mongoose.connect('mongodb://localhost:27017/blogWebsite')
    return mongoose.connect(url)
    .then(()=>{
        console.log('connected successfully !')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB