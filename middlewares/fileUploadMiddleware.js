const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    if (file.mimetype != "image/jpeg" && file.mimetype != "image/png") {
      cb(new Error("Wrong mime type"));
      return;
    }
    const originalname = file.originalname;
    const filename = originalname.replace(/\s/g, "_");

    cb(null, Date.now() + "--" + filename);
  },
});

const upload = multer({ storage: fileStorageEngine });
const fileUploadMiddleware = upload.single("file");

module.exports = fileUploadMiddleware;
