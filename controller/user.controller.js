const UserModel = require('../models/userModel.js')

const signup = async(req, res)=> {
    try {
        if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname){
            return res.status(400).send({message: "Kindly input all required fields"})
          }
        const userReg = await userModel.create(req.body)
        res.status(200).json(userReg)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const signin = async(req, res) => {
    try {
        const {email, password} = req.body
        UserModel.findOne({email: email})
            .then(user => {
                if(user){
                    if(user.password === password){
                        res.json('successfull')
                    } else {
                        res.json('password is incorrect')
                    }
                } else {
                    res.json('No record found!')
                }
            })
        

        // const userData = await userModel.find({})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    signup,
    signin
}