const express = require('express');         
const router = express.Router();

const conexion = require('./BbseDatos/bdatos'); 

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error; 
        } else {
            res.render('index', { results: results }); 
        }
    }); 
});

router.get('/crear', (req, res) => {
    res.render('crear'); 
});


router.get('/edicion.ejs/:id',(req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=? ',[id],(error,results)=>{
        if (error) {
            throw error; 
        } else {
            res.render('edicion', {user:results[0]}); 
        }

    })


})

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id],(error,results)=>{
        if (error) {
            throw error; 
        } else {
            res.redirect('/'); 
        }
        
    })
})

const crud  = require('./controles/crud'); 
router.post('/save', crud.save);
router.post('/udapte', crud.update);

module.exports = router;

