const { Post } = require('../models');

const postData = [
  {
    title: 'RunBuddy reaches 2 million subscribers!',
    post_url: 'https://runbuddy.com/press',
    user_id: '1'
  },
  {
    title: 'Robots are taking over the world!',
    post_url: 'https://newoverlords.com/',
    user_id: '2'
  },
  {
    title: 'Cats are on decline! Stocks lowest in centuries!',
    post_url: 'https://catrevolution.com',
    user_id: '3'
  },
  {
    title: 'Rexburg, ID new capital city?!',
    post_url: 'https://totallygovernmental.com',
    user_id: '4'
  },
  {
    title: 'COOKIES COOKIES COOKIES COOKIES',
    post_url: 'https://cookies.com',
    user_id: '5'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;