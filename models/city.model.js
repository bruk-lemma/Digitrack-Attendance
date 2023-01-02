const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: [true, "Please provide city name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    unique: true,
  },
});

const City = mongoose.model("Region", citySchema);
module.exports = City;
