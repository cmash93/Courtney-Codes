const { Post } = require('../models');


const postData = [
    {
        "title": "Should You Join a Coding Bootcamp?",
        "post_body": "In my experience, you learn SO MUCH from joining a coding bootcamp. It can be a lot of work, but the work definitely pays off. So far I've learned HTML, CSS, JavaScript, framworks, Node.js, Express.js, and many other skills!",
        "user_id": 1
    }
]

const seedPost = () => {
    Post.bulkCreate(postData);
}

module.exports = seedPost;