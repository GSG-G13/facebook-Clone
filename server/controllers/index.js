const addLoginController = require("./middlewares/loginController");
const signupContoller = require("./middlewares/signupController");
const getPostsController = require("./middlewares/postsController");
const getusername = require("./middlewares/usernameController");
const getUserPostsController = require("./middlewares/getuserPostController");
module.exports = { addLoginController, signupContoller, getPostsController , getusername, getUserPostsController};
