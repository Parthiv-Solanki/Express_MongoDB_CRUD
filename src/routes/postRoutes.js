const express = require("express");
const router = express.Router();
const Post = require("../../models/post.model");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    console.log(post);
    res.status(200).json({ post, message: "Successfully Created New Post" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }
    const updatedUser = await Post.findById(req.params.id);
    res.status(200).json({ updatedUser, message: "Successfully Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ post, message: "Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
