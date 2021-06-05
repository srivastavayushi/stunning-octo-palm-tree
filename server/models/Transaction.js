const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  payee: {
    type: Number,
    required: [true],
  },
  receiver: {
    type: Number,
    required: [true],
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
