const Mongose = require("mongoose");

const DataSchema =  Mongose.Schema(
    {
        UserName:{type:String},
        ToDoSubject:{type:String},
        ToDoDescription:{type:String},
        ToDoStatus:{type:String, default:"New"},
        ToDoCreateDate:{type:Date, default:Date.now()},
        ToDoUpdateDate:{type:Date, default:Date.now()}

    },{
        versionKey:false
    }
);

const ToDoListModel =  Mongose.model("ToDoList", DataSchema);


module.exports = ToDoListModel;