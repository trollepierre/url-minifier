module.exports = (sequelize, DataTypes) =>
  sequelize.define('MyUrl', {
    url: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  }, {});