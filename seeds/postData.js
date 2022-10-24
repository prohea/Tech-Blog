const { Post } = require('../models');

const postData = [
    {
        title: "Test",
        post_content: "Test",
        user_id: 1
    },
]

const postData = () => Post.bulkCreate(postData);

module.exports = postData;