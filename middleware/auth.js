const userModel = require('../modals/user')
const jwt = require('jsonwebtoken')



const Auth = async (req, res, next) => {
    try {

        const token = req.cookies.jwt
        // console.log(token)
        const varifyuser = jwt.verify(token, 'Nikhil@123')
        // console.log(varifyuser)
        const user = await userModel.findOne({ _id: varifyuser.userId })
        // console.log(user)
        req.data = user
        next()
    } catch (err) {
        res.redirect('/login1')
    }
}

module.exports = Auth 