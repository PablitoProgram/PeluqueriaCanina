const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.get('/', userController.ObtenerTodosLosUsuarios);
router.get('/:id', userController.ObtenerUsuarioPorId);
router.post('/', userController.crearUsuario);
router.put('/:id', userController.ActualizarUsuario);
router.delete('/:id',userController.BorrarUsuario);

module.exports = router;


/* router.get('/', (req, res) => {
    res.json(usuarios)
})
router.get('/:id', (req, res) => {
   const user = usuarios.find(u => u.id === parseInt(req.params.id))
   if(!user) return res.status(404).send('Usuario no encontrado')
    res.json(user)
})
router.post('/', (req, res) => {
    const nuevoUser = {
        id: usuarios.length + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail
    }
    usuarios.push(nuevoUser)
    res.status(201).json(nuevoUser)
})

router.put('/:id', (req, res) => {
    const user = usuarios.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).send('Usuario no encontrado')
    user.nombre = req.body.nombre || user.nombre
    user.apellido = req.body.apellido || user.apellido
    user.mail = req.body.mail || user.mail
     res.json(user)
})
router.delete('/:id', (req, res) => {
    const indiceUsuario = usuarios.findIndex(u => u.id === parseInt(req.params.id))

    if(!indiceUsuario === -1) return res.status(404).send('Ususario no encontrado')
    const usuariosEliminado = usuarios.splice(indiceUsuario,1)
res.json(usuariosEliminado);
}) */
