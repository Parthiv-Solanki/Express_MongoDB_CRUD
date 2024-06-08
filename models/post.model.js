const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the name"],
    },
    likes: {
      type: Number,
      required: [true, "please enter the likes"],
    },
    comments: {
      type: String,
      required: [true, "please enter the comment"],
    },
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
