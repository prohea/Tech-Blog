const { Post } = require("../models");

const postData = [
	{
		title: "Test",
		post_content: "Test",
		user_id: 1,
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
