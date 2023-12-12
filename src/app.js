const express = require ('express');
const app = express();

const path = require ('path');

const mainRoutes = require ('./routes/mainRoutes.js');

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

app.use('/',mainRoutes);


const PORT = 3000; 
app.listen(PORT,()=>{
    console.log(`Running Server in port ${PORT}`);
});