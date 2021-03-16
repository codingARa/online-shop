'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
     
     await queryInterface.bulkInsert('Stocks', [
      {
      product_id: 1,
      amount: 10,
      title : 'Die Farben der Magie',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '978-3-453-05860-7',
      image: '1.jpg',
      price: 9.99,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 2,
      amount: 10,
      title : 'Das Licht der Phantasie',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '978-3-453-03450-3',
      image: '2.jpg',
      price: 8.75,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 3,
      amount: 10,
      title : 'Das Erbe des Zauberers',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-03451-1',
      image: '3.jpg',
      price: 11.1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 4,
      amount: 10,
      title : 'Gevatter Tod',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-04290-5',
      image: '4.jpg',
      price: 9.96,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 5,
      amount: 10,
      title : 'Der Zauberhut',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '978-3-453-04300-6-432',
      image: '5.jpg',
      price: 14.49,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 6,
      amount: 10,
      title : 'MacBest',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-05408-3',
      image: '6.jpg',
      price: 8.91,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 7,
      amount: 10,
      title : 'Pyramiden',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-04505-X',
      image: '7.jpg',
      price: 7.99,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 8,
      amount: 10,
      title : 'Wachen! Wachen!',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-05029-0',
      image: '8.jpg',
      price: 19.99,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 9,
      amount: 10,
      title : 'Faust Eric',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-453-06234-5432',
      image: '9.jpg',
      price: 6.78,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 10,
      amount: 10,
      title : 'Voll im Bilde',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-442-41543-8',
      image: '10.jpg',
      price: 12.34,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 11,
      amount: 10,
      title : 'Der Alles Sense',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '3-978-3-442-41551-9',
      image: '11.jpg',
      price: 9.99,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
      {
      product_id: 12,
      amount: 10,
      title : 'Total verhext',
      description: 'Lore ipsum.',
      author: 'Terry Pratchett',
      isbn: '978-3-442-41557-8',
      image: '12.jpg',
      price: 4.45,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
    
    ], {});
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
