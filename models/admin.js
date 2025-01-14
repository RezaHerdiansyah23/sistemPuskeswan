module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin',
      },
    });
  
    return Admin;
  };
  