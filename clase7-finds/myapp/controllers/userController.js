
const userController = {
    register: (req, res)=>{
        return res.render("registerUser")
    },
    login: (req, res)=>{
        return res.render("login")
    },
}

module.exports = userController;