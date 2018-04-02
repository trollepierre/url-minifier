module.exports = (sequelize, DataTypes) => sequelize.define('Url', {
  url: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
});
