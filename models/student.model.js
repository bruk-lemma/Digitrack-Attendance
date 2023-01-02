const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please provide  your name"],
    unique: true,
  },
  Phone_no: {
    type: String,
    required: [true, "Please provide your phone number"],
    unique: true,
  },
  Batch: {
    type: String,
    required: ["true", "please provide a batch  number"],
  },
  /*gender: {
    type: String,
    required: [true, "please provide  your gender"],
  },*/
  /*age: {
    type: String,
    required: [true],
  },*/
  School: {
    type: String,
    required: [true],
  },
  Grade: {
    type: Number,
    required: [true],
  },
  Attendance: {
    type: Boolean,
    default: false,
  },
  Region: {
    type: String,
    required: [true, "please provide region"],
    enum: {
      values: ["AddisAbaba", "oromia"],
      message: "region can only be: AddisAbaba,oromia",
    },
  },

  /*
  paid: {
    type: Boolean,
    default: false,
  },*/
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
