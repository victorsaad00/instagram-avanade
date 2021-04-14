const {Post, sequelize} = require('../models')

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll()
        return res.json(posts)
    },

    create: async (req, res) => {
        let {texto, img, usuarios_id, n_likes} = req.body
        let post = await Post.create({
            texto, 
            img, 
            usuarios_id,
            n_likes
        })
        return res.json(post)
    },

    update: async (req,res) => {
        let { id } = req.params
        let { texto, img, usuarios_id, n_likes } = req.body

        let postUpdate = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: { id }
        })

        return res.send(postUpdate)
    },
    
    delete: async (req, res) => {

    }
}

module.exports = postsController