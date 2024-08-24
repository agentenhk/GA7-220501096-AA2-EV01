const mysql = require('mysql'); 

const conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'actividad7'

    

});

conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion es'+error);
        return
    }
    console.log('Conectado a la BD MYSQL'); 

})

module.exports = conexion; 