require("dotenv").config();
const express = require("express");
const ImageController = require("./controllers/ImageController");
const fileUploadMiddleware = require("./middlewares/fileUploadMiddleware");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const uploadsDirectory = "uploads";

app.use("/" + uploadsDirectory, express.static(uploadsDirectory));

app.post("/upload", fileUploadMiddleware, ImageController.ProcessImage);

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});
