const express = require ('express');
const Router = express.Router();

const mainController = require ('../controllers/mainController.js');

Router.get('/',mainController.index);


module.exports = Router;