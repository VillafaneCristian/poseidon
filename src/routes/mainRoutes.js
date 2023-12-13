const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController.js');
const productRoutes = require ('./productsRoutes.js');
const usersRoutes = require ('./usersRoutes.js');

router.get('/',mainController.index);

router.use('/products',productRoutes);
router.use('/users',usersRoutes);


module.exports = router;