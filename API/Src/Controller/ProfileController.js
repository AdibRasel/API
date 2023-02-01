const ProfileModel = require("../Models/ProfileModel")

exports.CreateProfile=(req, res)=>{
    
    let RequestBody = req.body;

    ProfileModel.create(RequestBody,(error, Data)=>{
        if(error){
            res.status(400).json({status:"Data Insert Fail From ProfileModel Line:9", data:error,})
        }else{
            res.status(200).json({status:"Data insert Success or Data save success", data:Data,})
        }
    })

}