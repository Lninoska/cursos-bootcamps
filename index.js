const { sequelize } = require ('./models')

// npx sequelize-cli model:generate --name Usuario --attributes firstName:string,lastName:string,email:string
// npx sequelize-cli model:generate --name Bootcamp --attributes title:string,cue:string,description:string
// npx sequelize-cli migration:generate --name create-UsuarioBootcamp

const {createUser, findAllusers, updateUsuario, deleteUsuario, AsosciarUsuarioABootcamp} = require('./controllers/user.controller')
const { createBootCamp, findAll, findById } = require('./controllers/bootcamp.controller')

async function main() {
    await sequelize.sync({ force: true})

    const Usuario1 = await createUser({firstName: 'Mateo', lastName:'Días', email:'mateo.diaz@correo.com'})
    const Usuario2 = await createUser({firstName: 'Santiago', lastName:'Mejías', email:'santiago.mejias@correo.com'})
    const Usuario3 = await createUser({firstName: 'Lucas', lastName:'Rojas', email:'lucas.rojas@correo.com'})
    const Usuario4 = await createUser({firstName: 'facundo', lastName:'Fernandez', email:'facundo.fernandez@correo.com'})
    console.log('Se ha agregado exitosamente los nuevos usuarios', Usuario1)
    console.log('Se ha agregado exitosamente los nuevos usuarios', Usuario2)
    console.log('Se ha agregado exitosamente los nuevos usuarios', Usuario3)
    console.log('Se ha agregado exitosamente los nuevos usuarios', Usuario4)

    const Bootcamp1 = await  createBootCamp({title: 'Introduciendo el bootcamp de React', cue:'10', description:'React es la librería más usada en JavaScript para el desarrollo de interfaces. ' })
    const Bootcamp2 = await  createBootCamp({title: 'bootcamp desattollo Web Full Stack', cue:'12', description:'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'})
    const Bootcamp3 = await  createBootCamp({title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning. ', cue:'12', description:'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning. '})
    console.log('Se ha creado exitosamente bootcamp', Bootcamp1)
    console.log('Se ha creado exitosamente bootcamp', Bootcamp2)
    console.log('Se ha creado exitosamente bootcamp', Bootcamp3)


    await AsosciarUsuarioABootcamp(Usuario2.id, Bootcamp1.id)
    await AsosciarUsuarioABootcamp(Usuario1.id, Bootcamp2.id)
    await AsosciarUsuarioABootcamp(Usuario1.id, Bootcamp3.id)
    await AsosciarUsuarioABootcamp(Usuario2.id, Bootcamp3.id)
    await AsosciarUsuarioABootcamp(Usuario3.id, Bootcamp3.id)
    console.log('Los usuarios fueron inscriptos exitosamente')

    
    
    const bootcamps = await findAll()
    console.log(JSON.stringify(bootcamps, null, 2))

    const usuarios = await findAllusers();
    console.log(JSON.stringify(usuarios,null, 2))

    const id = 1;
    const actualizar = { firstName:'Pedro', lastName:'Sánchez'}
    const actualizarUsuario = await updateUsuario(id, actualizar)
    console.log('Usuario actualizado', actualizarUsuario)

    await deleteUsuario(Usuario4.id);
    const usuariosPostEliminacion = await findAllusers();
    console.log('Usuarios despues de la eliminacion:', JSON.stringify(usuariosPostEliminacion, null, 2));

}

main()