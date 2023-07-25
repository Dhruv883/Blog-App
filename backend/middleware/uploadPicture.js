import multer from "multer";
import path, { join } from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "../frontend/public/blogImages");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileType = ["image/png", "image/jpeg", "image/jpg"];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadPicture = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export { uploadPicture };
