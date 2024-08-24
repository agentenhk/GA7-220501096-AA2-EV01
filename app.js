const express = require('express');
const app = express(); 

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({extended:false})); 

app.use(express(JSON)); 

app.use('/', require('./router')); 

app.listen(3000, ()=>{

    console.log('SERVER corriendo en el http://localhost:3000');

});
