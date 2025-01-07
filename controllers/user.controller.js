const { Usuario, Bootcamp } = require('../models')

async function createUser(data) {
    return await Usuario.create(data)
}

async function  findUserById(id) {
    return await Usuario.findByPk(id , { include: Bootcamp})
}

async function  findAllusers() {
    return await Usuario.findAll({ include: Bootcamp})
}

async function updateUsuario(id, data) {
    return await Usuario.update(data, {where: {id}})
}

async function deleteUsuario(id) {
    return await Usuario.destroy({ where: { id }})
}

async function AsosciarUsuarioABootcamp(usuarioId, bootcampId) {
    const usuario = await Usuario.findByPk(usuarioId);
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if(usuario && bootcamp){
        await usuario.addBootcamp(bootcamp);
        console.log(`El usuario fue exitosamente inscripto al bootcamp `)
    }
}

module.exports = { createUser, findUserById, findAllusers, updateUsuario, deleteUsuario, AsosciarUsuarioABootcamp}