const mongoose = require("mongoose");
const regionSchema = new mongoose.Schema({
  regionName: {
    type: String,
    required: [true, "Please provide region name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    unique: true,
  },
});

const Region = mongoose.model("Region", regionSchema);
module.exports = Region;
