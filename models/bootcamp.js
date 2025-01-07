module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define ('Bootcamp', {
    title:DataTypes.STRING,
    cue:DataTypes.STRING,
    description:DataTypes.STRING
  })


Bootcamp.associate = function(models) {
  Bootcamp.belongsToMany(models.Usuario, {
    through: 'UsuarioBootcamp',
    foreignKey: 'bootcampId',
  });
};

return Bootcamp;
};
