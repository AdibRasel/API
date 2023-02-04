const ProfileModel = require("../Models/ProfileModel")
const Jwt = require("jsonwebtoken")


// Create Profile
exports.CreateProfile=(req, res)=>{
    
    let RequestBody = req.body;

    ProfileModel.create(RequestBody,(error, Data)=>{
        if(error){
            res.status(400).json({status:"Data Insert Fail From ProfileModel", data:error,})
        }else{
            res.status(200).json({status:"Data insert Success or Data save success", data:Data,})
        }
    })

}


// User Login 
exports.UserLogin=(req, res)=>{
    
    let RequestBody = req.body;
    let UserNameFind = RequestBody["UserName"];
    let PasswordFind = RequestBody["Password"];

    ProfileModel.find({UserName: UserNameFind,},(err, data)=>{

            if(data.length > 0){
                // Create Auth Token // authontication token // টোকেন তৈরি করা হয়েছে
                let Paylod = {
                    exp: Math.floor(Date.now() / 100) + (24 * 60 * 60), //২৪ ঘন্টা এই টোকেনের মেয়াদ থাকবে
                    data: data
                }
                let token = Jwt.sign(Paylod, "123456789") // ১২৩৪৫৬৭৮৯ হচ্ছে সিক্রেট কি
                res.status(200).json({login:"Login Success",toekn:token, Data:data, data: data})
            }

            else{
                res.status(401).json({status:"401 unathorize, Login Fail, Please Type Sure Name and Password"})
            }
        })




}


//Select Profile 
exports.SelectProfile=(req, res)=>{
    
    let UserName = req.headers['UserName']

    ProfileModel.find({UserName:UserName},function(error, Data){
        if(error){
            res.status(400).json({status:"Select Profile Fail, an sure UserName", data:error})
        }
        else{
            res.status(200).json({status:"Select Profile success, see profile data", data:Data})
        }
    })

}





//Update Profile 
exports.UpdateProfile=(req, res)=>{
    
    let UserName = req.headers['UserName']
    let RequestBody = req.body;

    ProfileModel.updateOne({UserName:UserName},{$set:RequestBody}, {upsert:true},(error,data)=>{

        if(error){
            res.status(400).json({status:"Update Profile Fail", data:error})
        }
        else{
            res.status(200).json({status:"Update Profile success, see profile data", data:data})
        }


    })

}

