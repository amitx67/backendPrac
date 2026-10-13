import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// const crypto = require('crypto') --> lets se at last if there is any error.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/temp'))
  },
  filename: function (req, file, cb) {
   
      cb(null, file.originalname)
    
  }
})

export const upload = multer({ storage, })

