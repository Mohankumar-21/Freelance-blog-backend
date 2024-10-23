// index.js
const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const connectDB = require("./Database/Db");
const Routes = require("./Routes/Routes");
const upload = require("./middleware/upload"); // Import the upload middleware

env.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is Running");
});

// Use the upload middleware for API routes
app.use("/api", Routes(upload));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
