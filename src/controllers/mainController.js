const path = require ('path');

const mainController = {
    index: function(req,res){
        const indexPath = path.join(__dirname,'../views/index.html');
        res.sendFile(indexPath);
    }

}

module.exports = mainController;