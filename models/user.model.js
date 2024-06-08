const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the username"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;