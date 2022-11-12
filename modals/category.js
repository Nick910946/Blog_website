const mongoose = require('mongoose')

//define schema
const CategorySchema = new mongoose.Schema({
    name: {
            type:String,
            require:true,
    },
   

})

const CategoryModel = mongoose.model('categorys', CategorySchema)

module.exports = CategoryModel
