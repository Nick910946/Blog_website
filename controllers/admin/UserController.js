const userModel = require('../../modals/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class UserController {

  static register = async (req, res) => {
    try {

      // console.log(data)
      res.render('admin/register', { message: req.flash('error') })

    } catch (err) {
      console.log(err)
    }
  }
  static insertdata = async (req, res) => {

    const { name, email, password, cpassword } = req.body
    const user = await userModel.findOne({ email: email })

    if (user) {
      req.flash('error', 'Email Alreadt Exists!')
      res.redirect('/admin/register')
    } else {
      if (name && email && password && cpassword) {

        if (password == cpassword) {
          try {

            const salt = await bcrypt.genSalt(10)

            // const hashpassword = await bcrypt.hash(password,salt)
            const hashpassword = await bcrypt.hash(password, 10)
            // console.log(req.body)
            const result = new userModel({
              name: name,
              email: email,
              password: hashpassword

            })
            await result.save()
            req.flash('error', 'Registration Success Please Login !!!')

            res.redirect('/login1')

          } catch (err) {
            console.log(err)
          }


        } else {
          req.flash('error', 'Password does not match !!!')
          res.redirect('/admin/register')
        }

      } else {
        req.flash('error', 'All Feilds Are Reuired !')
        res.redirect('/admin/register')
      }
    }
  }
  static varifyLogin = async (req, res) => {
    try {

      // console.log(req.body)
      const { email, password } = req.body

      if (email && password) {
        const user = await userModel.findOne({ email: email })
        console.log(user)
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password)

          if ((user.email === email) && isMatched) {
            //generate jwt Token
            const token = jwt.sign({ userId: user._id }, 'Nikhil@123');
            // console.log(token)
            res.cookie('jwt', token)
            res.redirect('/admin/dashboard')

          } else {
            req.flash('error', 'Email Or Password is Invalid!')
            res.redirect('/login1')
          }

        } else {
          req.flash('error', 'Jaoo pahale Register Karo phir Aana !')
          res.redirect('/login1')
        }
      } else {
        req.flash('error', 'Itni Jaldi Kya hai Pura Bharo Beta !!!')
        res.redirect('/login1')

      }


    } catch (err) {
      console.log(err)
    }
  }

  static logout = async (req, res) => {
    try {

      // console.log(data)
      res.clearCookie('jwt')
      res.redirect('/')

    } catch (err) {
      console.log(err)
    }
  }


}
module.exports = UserController