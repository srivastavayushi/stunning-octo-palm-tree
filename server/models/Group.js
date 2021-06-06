const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Group", GroupSchema);
