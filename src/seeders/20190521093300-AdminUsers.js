

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'Avraam',
        lastName: 'Makhmudov',
        email: 'avraam@live.fr',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
