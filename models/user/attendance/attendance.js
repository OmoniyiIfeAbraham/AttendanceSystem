const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendance = new Schema({
  name: {
    type: String,
    required: [true,"Name is required"],
    minlength:[3,"Name too short"],
    maxlength:[30,"Name too long"],

  },
  adminId: {
    type: String,
    required: [true, "admin required"],
  },
  Bio: {
    type: String,
    required: [true, "About Attendance is required"],
    minlength:[6, "About attendance is too short"],
  
  },
  closed: {
    type: Boolean,
    default: false,
  },
  closedTime: {
    type:String,
    default:"not Closed"
  },
},{timestamps:true});

module.exports = mongoose.model("Attendance", attendance);
