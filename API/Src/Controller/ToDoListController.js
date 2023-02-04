const ToDoListModel = require("../Models/ToDoListModel")
const Jwt = require("jsonwebtoken")


// Create Profile
exports.ToDoListModel=(req, res)=>{
    
    let RequestBody = req.body;

    let UserName = req.headers["UserName"];
    let ToDoSubject = RequestBody["ToDoSubject"];
    let ToDoDescription = RequestBody["ToDoDescription"];
    let ToDoStatus = "New";
    let ToDoCreateDate = Date.now();
    let ToDoUpdateDate = Date.now();

    let PostBody = {
        UserName: UserName,
        ToDoSubject: ToDoSubject,
        ToDoDescription: ToDoDescription,
        ToDoStatus: ToDoStatus,
        ToDoCreateDate: ToDoCreateDate,
        ToDoUpdateDate: ToDoUpdateDate
    }

    ToDoListModel.create(PostBody,(error, Data)=>{
        if(error){
            res.status(400).json({status:"ToDo List Create Fail From ToDo List Model", data:error,})
        }else{
            res.status(200).json({status:"ToDo List insert Success or ToDo List save success", data:Data,})
        }
    })

}





//Select ToDo 
exports.SelectToDo=(req, res)=>{
    
    let UserName = req.headers['UserName']

    ToDoListModel.find({UserName:UserName},function(error, Data){
        if(error){
            res.status(400).json({status:"Select ToDo Fail, an sure UserName", data:error})
        }
        else{
            res.status(200).json({status:"Select ToDo success, see profile data", data:Data})
        }
    })

}





//Update ToDo 
exports.UpdateToDo=(req, res)=>{
    
    let ToDoSubject = req.body["ToDoSubject"]
    let ToDoDescription = req.body["ToDoDescription"]
    let _id = req.body["_id"]

    let ToDoUpdateDate = Date.now();

    let PostBody = {
        ToDoSubject:ToDoSubject,
        ToDoDescription: ToDoDescription,
        ToDoUpdateDate: ToDoUpdateDate
    }
    
    ToDoListModel.updateOne({_id:_id}, {$set:PostBody}, {upsert:true}, (error, data)=>{
        if(error){
            res.status(400).json({status:"Update ToDo Fail", data:error})
        }
        else{
            res.status(200).json({status:"Update ToDo success, see profile data", data:data})
        }
    })


}




//Status Update ToDo 
exports.StatusUpdateToDo=(req, res)=>{
    
    let ToDoStatus = req.body["ToDoStatus"]
    let _id = req.body["_id"]

    let ToDoUpdateDate = Date.now();

    let PostBody = {
        ToDoStatus:ToDoStatus,
        ToDoUpdateDate: ToDoUpdateDate
    }
    
    ToDoListModel.updateOne({_id:_id}, {$set:PostBody}, {upsert:true}, (error, data)=>{
        if(error){
            res.status(400).json({status:"Status Update ToDo Fail", data:error})
        }
        else{
            res.status(200).json({status:"Status Update ToDo success, see profile data", data:data})
        }
    })


}




//Remove ToDo 
exports.RemoveToDo=(req, res)=>{
    
    let _id = req.body["_id"]
    
    ToDoListModel.remove({_id:_id}, (error, data)=>{
        if(error){
            res.status(400).json({status:"Remove or Delete ToDo Fail", data:error})
        }
        else{
            res.status(200).json({status:"Remove or Delete ToDo success, see profile data", data:data})
        }
    })


}





//Select ToDo By Status
exports.SelectToDoByStatus=(req, res)=>{
    
    
    let UserName = req.headers['UserName']

    let ToDoStatus = req.body['ToDoStatus']

    ToDoListModel.find({UserName:UserName, ToDoStatus:ToDoStatus},function(error, Data){
        if(error){
            res.status(400).json({status:"Select ToDo Status Fail, an sure UserName", data:error})
        }
        else{
            res.status(200).json({status:"Select ToDo Status success, see profile data", data:Data})
        }
    })

}





//Filter By Date ToDo
exports.FilterByCreateDateToDo=(req, res)=>{


    let UserName = req.headers['UserName']


    let FromDateToDo = req.body['FromDateToDo']
    let ToDaTeToDo = req.body['ToDaTeToDo']

    //কন্ডিশনার দিয়ে কোন তারিখ থেকে কোন তারিখে টুডু তৈরি করা হয়েছে সেগুলো ছলে আসবে
    ToDoListModel.find({UserName:UserName, ToDoCreateDate:{$gte:new Date(FromDateToDo), $lte:new Date(ToDaTeToDo)}},function(error, Data){
        if(error){
            res.status(400).json({status:"Select ToDo Status Fail, an sure UserName", data:error})
        }
        else{
            res.status(200).json({status:"Select ToDo Status success, see profile data", data:Data})
        }
    })

}