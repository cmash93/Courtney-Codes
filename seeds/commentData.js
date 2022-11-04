const { Comment } = require('../models')

const commentData = [
    {
        "user_id": 1,
        "post_id": 1,
        "comment_body": "We learned this in my class!"
    }
]

const seedComment = () => {
    Comment.bulkCreate(commentData);
};

module.exports = seedComment;