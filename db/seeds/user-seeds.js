const { User } = require('../../models');

const userData = [
  {
    username: 'leterver',
    email: 'letty@email.com',
    password: 'password'
  },
  {
    username: 'fankeybo',
    email: 'franky@email.com',
    password: 'password'
  },
  {
    username: 'ishostor',
    email: 'shosho@email.com',
    password: 'password'
  },
  {
    username: 'lanotoro',
    email: 'lanny@email.com',
    password: 'password'
  },
  {
    username: 'dgesovat',
    email: 'getty@email.com',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;