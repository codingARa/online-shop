'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
     
     await queryInterface.bulkInsert('Stocks', [{
      product_id: 1,
      amount: 10,
      title : 'Der Titel',
      description: 'Ein super Buch',
      author: 'Terry Pratchett',
      isbn: '3-432',
      image: 'book_standin.jpg',
      price: 9.99,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
