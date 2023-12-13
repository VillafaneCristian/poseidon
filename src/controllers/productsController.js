const path = require ('path');

const productsController = {
    detail: function(req,res){
        const productDetailPath = path.join(__dirname,'../views/productDetail.html');
        res.sendFile(productDetailPath);
    },
    cart: function(req,res){
        const productCartPath = path.join(__dirname,'../views/productCart.html');
        res.sendFile(productCartPath);
    }

}

module.exports = productsController;