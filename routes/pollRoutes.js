const express = require("express");
const { createPoll, getPoll } = require("../controllers/pollController");
const router = express.Router();

router.post("/create", createPoll);
router.get("/:pollId", getPoll);

module.exports = router;
