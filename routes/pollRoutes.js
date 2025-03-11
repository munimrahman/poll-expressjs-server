const express = require("express");
const {
  createPoll,
  getPoll,
  getRecentPolls,
} = require("../controllers/pollController");
const router = express.Router();

router.post("/create", createPoll);
router.get("/recent", getRecentPolls);
router.get("/:pollId", getPoll);

module.exports = router;
