const express = require("express");
const { addBlog, getAllBlogs } = require("../controller/blogController");

const router = express.Router();

module.exports = (upload) => {
  router.post(
    "/blogs",
    upload.fields([{ name: "img" }, { name: "video" }]),
    addBlog
  );
  router.get("/blogs", getAllBlogs);

  return router;
};
