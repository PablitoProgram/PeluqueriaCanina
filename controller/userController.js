const db = require ('../db/db');

const ObtenerTodosLosUsuarios = (req,res) => {
    const sql = 'SELECT * FROM usuarios';
    
    db.query(sql, (err,results) => {
        if(err) throw err;

        res.json(results);
    });
}
const ObtenerUsuarioPorId = (req, res) =>{
    const {id} = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql,[id], (err,result) =>
    {
        if(err) throw err;        
        res.json(result);
    });
};


const crearUsuario = (req, res) =>{
    const {nombre,apellido,mail,nombrePerro,raza,color} = req.body;


    const sql = 'INSERT INTO usuarios (nombre,apellido,mail,nombrePerro,raza,color) VALUES (?,?,?,?,?,?)';


    db.query(sql,[nombre,apellido,mail,nombrePerro,raza,color], (err,result) =>
    {
        if(err) throw "error aca", err;


        res.json({
            mensaje : 'Cliente Creado',
            idUsuario: result.insertId
            });
    });
};






const ActualizarUsuario = (req, res) =>{
    const {id} = req.params;
    const {nombre,apellido,mail,nombrePerro,raza,color} = req.body;


    const sql = 'UPDATE usuarios SET nombre = ?, apellido = ?, mail = ?, nombrePerro = ?, raza = ?, color = ? WHERE id = ?';
    db.query(sql,[nombre,apellido,mail,nombrePerro,raza,color,id], (err,result) =>
    {
        if(err) throw err;


        res.json(
            {
                message : 'Cliente editado'
            });
    });


};


const BorrarUsuario = (req, res) =>{
    const {id} = req.params;
    const sql  = 'DELETE FROM usuarios WHERE id= ?';
    db.query(sql,[id],(err,result) =>
    {
        if(err) throw err;


        res.json(
            {
                message: 'Cliente eliminado'
            });
    });
};


module.exports = {
    ObtenerTodosLosUsuarios,
    ObtenerUsuarioPorId,
    crearUsuario,
    ActualizarUsuario,
    BorrarUsuario
}