const express = require("express");
const { castVote, addReaction } = require("../controllers/voteController");
const router = express.Router();

router.post("/vote", castVote);
router.post("/reaction", addReaction);

module.exports = router;
