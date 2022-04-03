const { Post } =require('../models');

const postData = [
  {
    "title": "test",
    "body": "test data"
  }
];
const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;
