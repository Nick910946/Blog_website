const mongoose = require('mongoose')

//define schema
const BlogSchema = new mongoose.Schema({
    title: {
            type:String,
            require:true,
    },
    description: {
        type:String,
        require:true,
    },
    image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },

},{timestamps:true})

const BlogModel = mongoose.model('Blogs', BlogSchema)

module.exports = BlogModel