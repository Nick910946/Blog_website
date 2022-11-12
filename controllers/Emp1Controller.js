
class Emp1Controller{
    static home1 = async(req,res)=>{
        res.render('home')
    }

    static about1 = async(req,res)=>{
        res.render('about')
    }

    static ourteam1 = async(req,res)=>{
        res.render('ourteam')
    }

    static login = async(req,res)=>{
        res.render('login')
    }
    static contactus = async(req,res)=>{
        res.render('contactus')
    }
}


   







module.exports = Emp1Controller