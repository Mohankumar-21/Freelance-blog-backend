const BlogGenre = require("../Schema/Schema");
const cloudinary = require("cloudinary").v2;

const addBlog = async (req, res) => {
  try {
    const { title, category, description, star, details } = req.body;
    console.log(req.body)

    const imgFile = req.files.img[0];
    const videoFile = req.files.video[0];

    const imageUpload = await cloudinary.uploader.upload(imgFile.path);
    const videoUpload = await cloudinary.uploader.upload(videoFile.path);

    const newBlog = new BlogGenre({
      title,
      category,
      description,
      img: imageUpload.secure_url,
      back: videoUpload.secure_url,
      video: videoUpload.secure_url,
      star,
      details: {
        genre: details.genre,
        createdBy: details.createdBy,
        directedBy: details.directedBy,
        starring: details.starring,
        musicBy: details.musicBy,
        countryOfOrigin: details.countryOfOrigin,
        originalLanguage: details.originalLanguage,
        seasons: details.seasons,
        numberOfEpisodes: details.numberOfEpisodes,
      },
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogGenre.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  addBlog,
};
