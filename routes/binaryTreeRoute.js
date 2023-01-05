const express = require('express');
const binaryTreeRouter = express.Router();
const {createNodeController,connectChildController,bfsController } = require("../controllers/binaryTreeController");

binaryTreeRouter.route("/createnode").post(createNodeController);
binaryTreeRouter.route("/connectchild").post(connectChildController);
binaryTreeRouter.route("/bfs").post(bfsController);

module.exports = binaryTreeRouter;