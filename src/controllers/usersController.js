const path = require ('path');

const usersController = {
    register: function(req,res){
        const registerPath = path.join(__dirname,'../views/register.html');
        res.sendFile(registerPath);
    },
    login: function(req,res){
        const loginPath = path.join(__dirname,'../views/login.html');
        res.sendFile(loginPath);
    }


}

module.exports = usersController;