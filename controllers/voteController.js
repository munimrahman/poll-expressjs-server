const Poll = require("../models/Poll");

// Cast Vote
const castVote = async (req, res) => {
  try {
    const { pollId, optionIndex } = req.body;
    const poll = await Poll.findById(pollId);
    if (!poll || poll.expiresAt < new Date()) {
      return res
        .status(404)
        .json({ success: false, message: "Poll expired or not found" });
    }

    poll.options[optionIndex].votes += 1;
    await poll.save();

    res.json({ success: true, message: "Vote recorded" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error casting vote" });
  }
};

// Add Reaction
const addReaction = async (req, res) => {
  try {
    const { pollId, reactionType } = req.body;
    const poll = await Poll.findById(pollId);

    if (!poll)
      return res
        .status(404)
        .json({ success: false, message: "Poll not found" });

    poll.reactions[reactionType] += 1;
    await poll.save();

    res.json({ success: true, message: "Reaction added" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding reaction" });
  }
};

module.exports = { castVote, addReaction };
