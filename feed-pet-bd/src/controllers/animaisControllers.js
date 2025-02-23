const animaisServices = require("../services/animaisServices");


async function getAll(req, res, next) {    
    try {
        const animais = await animaisServices.getAnimais();

        res.json(animais);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function criarParaUsuario(req, res, next) {
    try {        
        const animais = await animaisServices.createAnimalparaUsuario(req.params.id, req.body)

        res.status(201).json(animais);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAllByAnimalId(req, res, next) {    
    try {
        const usuarios = await animaisServices.acharUsuariosAnimal(req.params.id);
        res.json(usuarios);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getAll,
    criarParaUsuario,
    getAllByAnimalId
}