/* ----------SERVIDOR ESTATICO EXPRESS-------- */
const port = 3000
const express = require('express')
const app = express()
const path = require('path')
const usuariosRouter = require('./routes/usuarios')

app.use(express.json())

app.use('/usuarios', usuariosRouter)

app.use(express.static(path.join(__dirname, 'public')))

    app.listen(port, () => {
  console.log(`servidor ejecutandose en el puerto: ${port}`)
})