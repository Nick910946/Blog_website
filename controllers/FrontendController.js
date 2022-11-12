class FrontendController{
    static home = async(req,res)=>{
        try{
            res.render('front/home')
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
            res.render('front/blogdetails')
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
            res.render('front/login1')
        }catch(err){
            console.log(err)  
        }
    }
}


module.exports = FrontendController