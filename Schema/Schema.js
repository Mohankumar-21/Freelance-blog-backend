const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const detailsSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  createdBy: { type: String, required: true },
  directedBy: { type: String, required: true },
  starring: { type: [String], required: true },
  musicBy: { type: String, required: true },
  countryOfOrigin: { type: String, required: true },
  originalLanguage: { type: String, required: true },
  seasons: { type: Number, default: 0 },
  numberOfEpisodes: { type: Number, default: 0 },
});

const blogGenreSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  back: { type: String, required: true },
  video: { type: String, required: true },
  star: { type: String, required: true },
  details: detailsSchema,
  ratings: [ratingSchema],
});

const BlogGenre = mongoose.model("BlogGenre", blogGenreSchema);

module.exports = BlogGenre;