const express = require('express')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const Emp1Controller = require('../controllers/Emp1Controller')
const FrontendController = require('../controllers/FrontendController')
// const EmpController = require('../controllers/EmpController')

const StudentController = require('../controllers/StudentControllers')
const router = express.Router()




// router.get('/', (req, res) => {
//     res.send('Hello World!')
//   })




router.get('/studentdisplay' ,StudentController.display)
router.get('/studentview' ,StudentController.view)
router.get('/studentcreate' ,StudentController.create)
router.get('/studentedit' ,StudentController.edit)
router.get('/studentdelete' ,StudentController.delete)

//Emp1 Controller

router.get('/home',Emp1Controller.home1)
router.get('/about',Emp1Controller.about1)
router.get('/ourteam',Emp1Controller.ourteam1)
router.get('/login',Emp1Controller.login)
router.get('/contactus',Emp1Controller.contactus)

//order

// router.get('/order/display',OrederController.display)

//FrontendController

router.get('/',FrontendController.home)
router.get('/blogdetails',FrontendController.details)
router.get('/about1',FrontendController.about)
router.get('/blogs',FrontendController.blogs)
router.get('/contact',FrontendController.contact)
router.get('/login1',FrontendController.login)

//Admin Controller

router.get('/admin/dashboard',AdminController.dashboard)

//Blog Controller
router.get('/blog/display',BlogController.blogdisplay)
router.get('/blog/create',BlogController.createblog)







module.exports = router


