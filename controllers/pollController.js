const Poll = require("../models/Poll");

// Create Poll
const createPoll = async (req, res) => {
  try {
    const { question, options, type, hideResultsUntilEnd, duration } = req.body;

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + duration); // duration in hours

    const poll = new Poll({
      question,
      options,
      type,
      hideResultsUntilEnd,
      expiresAt,
    });

    await poll.save();

    res.status(201).json({ success: true, pollId: poll._id });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating poll" });
  }
};

// Get Poll
const getPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.pollId);
    if (!poll || poll.expiresAt < new Date()) {
      return res
        .status(404)
        .json({ success: false, message: "Poll not found or expired" });
    }

    res.json(poll);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching poll" });
  }
};

module.exports = { createPoll, getPoll };
