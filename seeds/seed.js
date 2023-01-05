const sequelize = require("../config/connection");

const seedPosts = require("./postData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");

	await userData();
	console.log("\n----- USERS SEEDED -----\n");

	await postData();
	console.log("\n----- POSTS SEEDED -----\n");

	await commentData();
	console.log("\n----- COMMENTS SEEDED -----\n");

	process.exit(0);
};

seedAll();
