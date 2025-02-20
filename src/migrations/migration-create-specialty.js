'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('specialtys', {
      // id: DataTypes.STRING,
      // email: DataTypes.STRING,
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // address: DataTypes.STRING,
      // gender: DataTypes.STRING,
      // roleid: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      decription: {
        type: Sequelize.TEXT
      },
      roleid: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('specialtys');
  }
};