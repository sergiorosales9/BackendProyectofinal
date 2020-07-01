
const UserModel = require("../models/user");


const adminUser ={
    
    traerUsers: async (req , res) => {
        
    const user = await UserModel.find().populate("turno")
    res.json({user})
}
}

module.exports = adminUser;