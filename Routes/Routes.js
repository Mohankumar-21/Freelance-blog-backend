
const express = require("express");
const { addBlog, getAllBlogs, updateBlog, deleteBlog } = require("../controller/blogController");

const router = express.Router();

module.exports = (upload) => {

    router.post("/blogs", upload.fields([{ name: "img" }, { name: "video" }]), addBlog);
    router.get("/blogs", getAllBlogs);
    router.put("/blogs/:id", upload.fields([{ name: "img" }, { name: "video" }]), updateBlog);
    router.delete("/blogs/:id", deleteBlog);

    return router;
};
