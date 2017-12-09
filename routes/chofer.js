var express = require('express');
var router = express.Router();
const chofercontroller = require('../controllers/chofercontroller')
var path = require('path')
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({ storage: storage });


router.route('/')
.get(chofercontroller.index)

.post(chofercontroller.post)

router.route('/:id')
.get(chofercontroller.show)

.put(chofercontroller.put)

.delete(chofercontroller.delete)

router.route('/:id/foto')
.get(chofercontroller.showPicture)

.post(upload.single('image'),chofercontroller.postPicture)

router.route('/:id/camion')
.get(chofercontroller.showCamion)


module.exports = router;