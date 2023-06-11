const path = require("path");
const Jimp = require("jimp");

module.exports = class ImageController {
  static ProcessImage(req, res) {
    Jimp.read(req.file.path)
      .then((lenna) => {
        return lenna
          .resize(256, 256)
          .quality(60)
          .greyscale()
          .write(req.file.path);
      })
      .catch((err) => {
        console.error(err);
      });
    return res.status(200).json({
      message: "File uploaded successfully",
      file: "http://localhost:3100/" + req.file.path,
    });
  }
};
