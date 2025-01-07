const { Bootcamp, Usuario } = require('../models')

async function createBootCamp(data) {
    return await Bootcamp.create(data)
}
async function findAll() {
    return await Bootcamp.findAll({ include: Usuario})
}
async function findById(id) {
    return await Bootcamp.findByPk(id, {include: Usuario})
}
async function update(id, data) {
    return await Bootcamp.update(data, { where: {id}})
}
async function deleteBootcamp(id) {
    return await Bootcamp.destroy({Where: { id }})
}

module.exports = { createBootCamp, findAll, findById, update, deleteBootcamp}