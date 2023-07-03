import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, res, calb) => {
    calb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, calb) => {
    calb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1000000,
  },
  fileFilter: function (req, file, calb) {
    let ext = path.extname(file.originalname);
    if (ext != ".png" && ext != ".jpg" && ext != ".jpeg") {
      return calb(new Error("Invalid file type"));
    }
    calb(null, true);
  },
});

export { uploadPicture };
