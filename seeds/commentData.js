const { Comment } =require('../models');

const commentData = [
  {
    "body": "test data comment"
  }
];
const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;
