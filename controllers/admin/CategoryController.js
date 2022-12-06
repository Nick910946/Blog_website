const CategoryModel = require('../../modals/category')

class CategoryController {
  static createcat = async (req, res) => {
    try {
      res.render('admin/Category/createcategory')

    } catch (err) {
      console.log(err)
    }
  }
  static insertcat = async (req, res) => {
    try {
      // console.log(req.body)
      const result = new CategoryModel({
        title: req.body.title

      })
      await result.save()
      res.redirect('/Category/createcategory')
    } catch (err) {
      console.log(err)
    }
  }
  static displaycat = async (req, res) => {
    try {
      const data = await CategoryModel.find()
      // console.log(data)
      res.render('admin/Category/displaycat', { res: data })

    } catch (err) {
      console.log(err)
    }
  }
  static viewcat = async (req, res) => {
    try {
      //  console.log(req.params.id)
      const data = await CategoryModel.findById(req.params.id)
      // console.log(data)
      res.render('admin/Category/viewcat', { d: data })
    } catch (err) {
      console.log(err)
    }
  }
  static editcat = async (req, res) => {
    try {
      //  console.log(req.params.id)
      const data = await CategoryModel.findById(req.params.id)
      // console.log(data)
      res.render('admin/Category/editcat', { d: data })
    } catch (err) {
      console.log(err)
    }
  }
  static Updatecat = async(req,res) =>{
    try{
        // console.log(req.body)
        // console.log(req.params.id)
        const updateData = await CategoryModel.findByIdAndUpdate(req.params.id ,{
            title : req.body.title,
          
        })
        await updateData.save()
        res.redirect('/Category/displaycat')

    }catch (err){
        console.log(err)
    }
    
}
static deletecat = async(req,res) =>{
    try{
        // console.log(req.params.id)
        const BlogDelete = await CategoryModel.findOneAndDelete(req.params.id)
        res.redirect('/Category/displaycat')

    }catch(err){
        console.log(err)
    }
}

}

module.exports = CategoryController
