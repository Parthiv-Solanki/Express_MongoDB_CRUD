require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const postRouter = require("./routes/postRoutes");

const uri = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected Successfully!!!!");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRouter);

app.use("/api/user", userRouter);

app.use("/api/post", postRouter);
