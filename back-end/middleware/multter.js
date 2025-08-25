// middleware/multter.js
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Ensure 'uploads' directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadDir);
  },
  filename: function (req, file, callback) {
    const uniqueName = Date.now() + '-' + file.originalname;
    callback(null, uniqueName);
  },
});

// Create multer instance
const upload = multer({ storage });

export default upload;
