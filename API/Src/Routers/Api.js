const ProfileController = require("../Controller/ProfileController.js")

const Express = require("express");
const Router =  Express.Router()


Router.post("/ProfileCreate", ProfileController.CreateProfile)



module.exports = Router;