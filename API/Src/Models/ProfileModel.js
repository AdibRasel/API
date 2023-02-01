const Mongose = require("mongoose");

const DataSchema =  Mongose.Schema(
    {
        FirstName:{type:String},
        LastName:{type:String},
        EmailAddress:{type:String},
        MobileNumber:{type:String},
        City:{type:String},
        UserName:{type:String},
        Password:{type:String},
    },{
        versionKey:false
    }
);

const ProfileModel =  Mongose.model("Profile", DataSchema);


module.exports = ProfileModel;