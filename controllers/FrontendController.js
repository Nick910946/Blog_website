const BlogModel = require('../modals/Blog')

class FrontendController{
    static home = async(req,res)=>{
        try{
            const blogs = await BlogModel.find()
            // console.log(blogs)
            res.render('front/home',{b : blogs})
        }catch(err){
            console.log(err)  
        }
    }
    static about = async(req,res)=>{
        try{
            res.render('front/about1')
        }catch(err){
            console.log(err)  
        }
    }
    static details = async(req,res)=>{
        try{
            // console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            res.render('front/blogdetails',{res : data})
        }catch(err){
            console.log(err)  
        }
    }
    static blogs = async(req,res)=>{
        try{
            res.render('front/blogs')
        }catch(err){
            console.log(err)  
        }
    }
    static contact = async(req,res)=>{
        try{
            res.render('front/contact')
        }catch(err){
            console.log(err)  
        }
    }
    static login = async(req,res)=>{
        try{
            res.render('front/login1',{succmessage: req.flash('suMsg'), msgerr: req.flash('error')})
        }catch(err){
            console.log(err)  
        }
    }
}


module.exports = FrontendController