const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: [
      {
        text: String,
        votes: { type: Number, default: 0 },
      },
    ],
    type: {
      type: String,
      enum: ["multiple-choice", "yes-no"],
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    hideResultsUntilEnd: {
      type: Boolean,
      default: false,
    },
    reactions: {
      fire: { type: Number, default: 0 },
      like: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Poll", pollSchema);
