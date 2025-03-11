const express = require("express");
const pollRoutes = require("./pollRoutes");
const voteRoutes = require("./voteRoutes");

const router = express.Router();

router.use("/polls", pollRoutes);
router.use("/votes", voteRoutes);

module.exports = router;
