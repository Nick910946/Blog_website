const BlogModel = require('../../modals/Blog')
var cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: 'dlgrjnvkx', 
    api_key: '313939314252726', 
    api_secret: 'GOiWFSJrVc9RJueNfsqySFmdYXw',
    secure: true
  });

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
    static bloginsert = async(req,res) =>{
        try{
            // console.log(req.files.image)
            const file = req.files.image
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'BlogImages'
            })
        //   console.log(myCloud)
        const result = new BlogModel({
            title : req.body.title,
            description : req.body.description,
            image: {

                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
          
        })
        await result.save()
        res.redirect('/blog/create')
        }catch (err){
            console.log(err)
        }
    }
    static viewblog = async(req,res) =>{
        try{
        //  console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/blog/view',{d:data})
        }catch (err){
            console.log(err)
        }
    }
    static editblog = async(req,res) =>{
        try{
        //  console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/blog/edit',{d:data})
        }catch (err){
            console.log(err)
        }
    }
    static blogUpdate = async(req,res) =>{
        try{
            const  user = await BlogModel.findById(req.params.id)
            const imageId =user.image.public_id
            // console.log(imageId)
            const file = req.files.image
            await cloudinary.uploader.destroy(imageId)
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'BlogImages'
            })
            // console.log(req.body)
            // console.log(req.params.id)
            const updateData = await BlogModel.findByIdAndUpdate(req.params.id ,{
                title : req.body.title,
                description : req.body.description,
                image: {

                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            await updateData.save()
            res.redirect('/blog/display')

        }catch (err){
            console.log(err)
        }
        
    }
    static deleteblog = async(req,res) =>{
        try{
            const  user = await BlogModel.findById(req.params.id)
            const imageId =user.image.public_id
            // console.log(req.params.id)
            await cloudinary.uploader.destroy(imageId)
            const BlogDelete = await BlogModel.findByIdAndDelete(req.params.id)
            
            res.redirect('/blog/display')

        }catch(err){
            console.log(err)
        }
    }
    
}

module.exports = BlogController