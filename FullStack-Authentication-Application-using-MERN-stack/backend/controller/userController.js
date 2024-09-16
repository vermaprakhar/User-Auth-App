import { User } from "../models/user.model.js";
import uploadFileOnCloudinary from "../utils/cloudinary.js";
import sendToken from "../utils/jwtToken.js";

const register = async(req,res,next) => {
    let {name,email,password,age,phone,designation} = req.body;
    if(!name || !email || !password || !age || !phone || !designation){
        return res.status(200).json({
            success:false,
            message:"All fields are required"
        })
    }

    const avatar = req.file;
    if(!avatar){
        return res.status(400).json({
            success:false,
            message:"Avatar is required"
        });
    }

    const isAlreadyExist = await User.findOne({email});
    if(isAlreadyExist){
        return res.status(400).json({
            success:false,
            message:"user already registered"
        });
    }
  

    const response = await uploadFileOnCloudinary(avatar);
    // console.log(response);

    const user = await User.create({name,email,password,age,avatar:response?.url,phone,designation});
    if(!user){
        return res.status(500).json({
            success:false,
            message:"server error"
        });
    }

    sendToken(200,"successfully registered",user,res);

}

const login = async (req,res,next) => {
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }


        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Not registered user"
            });
        }

        const correctPasword = await user.comparePassword(password);
        console.log(correctPasword);

        if(!correctPasword){
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            })
        }

        sendToken(200,"user LoggedIn",user,res);

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const logout = async (req,res,next) => {
    try{
        res.status(200)
                      .cookie("token","",{ expires:new Date(Date.now()),httpOnly:true})
                      .json({
                        success:true,
                        message:"User loggedOut"
                    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const update = async (req,res,next) => {
    k
}

const userProfile = async (req,res) => {
    try {
        const userId = req.user;
        const user = await User.findById(userId);
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

export {
    register,
    login,
    logout,
    update,
    userProfile
}