// Profile Controller 
const ProfileController = require("../Controller/ProfileController.js");


// ToDo List Controller 
const ToDoListController = require("../Controller/ToDoListController.js");

// Auth Verify Middleware 
const AuthVerifyMiddleware = require("../Middleware/AuthVerifyMiddleware.js");



const Express = require("express");
const Router =  Express.Router()

// Profile Create Api 
Router.post("/ProfileCreate", ProfileController.CreateProfile)

// User Login Api 
Router.post("/UserLogin", ProfileController.UserLogin)

// Select Profile 
Router.get("/SelectProfile",AuthVerifyMiddleware, ProfileController.SelectProfile)

// Update Profile
Router.post("/UpdateProfile",AuthVerifyMiddleware, ProfileController.UpdateProfile)





// ToDo List Create 
Router.post("/CreateToDo",AuthVerifyMiddleware, ToDoListController.ToDoListModel)

// Select ToDo 
Router.get("/SelectToDo",AuthVerifyMiddleware, ToDoListController.SelectToDo)

// Update ToDo 
Router.post("/UpdateToDo",AuthVerifyMiddleware, ToDoListController.UpdateToDo)

// Status Update ToDo
Router.post("/StatusUpdateToDo",AuthVerifyMiddleware, ToDoListController.StatusUpdateToDo)

// Remove ToDo 
Router.post("/RemoveToDo",AuthVerifyMiddleware, ToDoListController.RemoveToDo)

// Select ToDo By Status
Router.post("/SelectToDoByStatus",AuthVerifyMiddleware, ToDoListController.SelectToDoByStatus)

// Filter By Create DateT oDo
Router.post("/FilterByCreateDateToDo",AuthVerifyMiddleware, ToDoListController.FilterByCreateDateToDo)

// Documention Post Man this project 
// https://documenter.getpostman.com/view/22317575/2s935oKibC

module.exports = Router;