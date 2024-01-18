'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      paymentMethodId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      couponId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      reference: {
        allowNull: false,
        type: Sequelize.STRING
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      totalBasePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      totalTaxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      saleTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_tables')
  }
}
