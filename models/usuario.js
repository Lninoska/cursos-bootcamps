module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Usuario.associate = function(models) {
    Usuario.belongsToMany(models.Bootcamp, {
      through: 'UsuarioBootcamp',
      foreignKey: 'usuarioId',
    });
  };


  return Usuario;
};
