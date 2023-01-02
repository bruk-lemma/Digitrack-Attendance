const mongoose = require("mongoose");
const batchSchema = new mongoose.Schema({
  batchName: {
    type: String,
    required: [true, "Please provide batch name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    unique: true,
  },
});

const Batch = mongoose.model("Batch", batchSchema);
module.exports = Batch;
