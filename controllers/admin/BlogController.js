const BlogModel = require('../../modals/Blog')

class BlogController{
    static blogdisplay = async(req,res) =>{ 
        try{
            const data = await BlogModel.find()
            // console.log(data)
          res.render('admin/blog/display',{res:data})

        }catch (err){
            console.log(err)
        }
    }
    static createblog = async(req,res) =>{
        try{
          res.render('admin/blog/create')

        }catch (err){
            console.log(err)
        }
    }
}

module.exports = BlogController