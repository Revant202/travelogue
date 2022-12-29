import User from "../models/User.js"

export const register = async(req,res,next)=>{
    try {
        const newUser = new User({
            //not using req.body coz we will encode the password
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        await newUser.save()
        res.status(200).send("new user has been created")
    } catch (error) {
        next(error)
    }
} 