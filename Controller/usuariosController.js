const {Usuario, sequelize} = require('../models/')
// const Usuario = require('../models/Usuario')

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()
        return res.json(usuarios)
    }, 

    create: async (req, res) => {
        let usuario = req.body
        await Usuario.create(usuario)
        return res.json(usuario)
    },

    update: async (req, res) => {
        const {id} = req.params
        const {nome, email, senha} = req.body
        await Usuario.update({
            nome, 
            email, 
            senha
        },{
            where:{ id }
        })

        return res.status(200).send('Alterado com sucesso.')
    },
    
    delete: async (req, res) => {
        const usuario = req.params
        await Usuario.destroy(usuario, {
            where: {
                id = usuario.id
            }
        })
        return res.status(200).send('Deletado com sucesso.')
    }
}

module.exports = usuariosController