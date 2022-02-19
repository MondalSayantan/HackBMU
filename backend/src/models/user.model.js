const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {},
  weight: {},
  height: {},
  age: {},
  bp: {},
});

module.exports.User = mongoose.model("User", userSchema);
