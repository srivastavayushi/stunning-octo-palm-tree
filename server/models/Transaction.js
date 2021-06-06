const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  description: {
    type: String,
    required: [true, "Please add some text"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  secondUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: "user",
  },
  amount: {
    type: Number,
    required: [true, "Please add positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
