const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let { nome, email, senha } = req.body

    let usuario = await Usuario.findAll({where:{email}})

    if(nome === null || email === null || senha === null) {
        res.status(400).json({erro: "Preencha os campos corretamente"})
        return
    } else if(usuario.length) {
        res.status(400).json({erro: "Email já cadastrado!"})
        return
    } else if(!validarEmail(email)) {
        res.status(400).json({erro: "Email invalido!"})
        return
    } else if(senha.length < 6 && senha.length >= 12) {
        res.status(400).json({erro:"Senha invalida. Precisa ter no mínimo 6 números e máximo 12."})
    } else {
        next()
    }

}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}
