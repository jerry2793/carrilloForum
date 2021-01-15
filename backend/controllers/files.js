// file operation controllers

const express = require('express')
const router = require('express').Router()

const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requrieAdmin = require('../middlewares/reqAdmin')
// const requireSignin = passport.authenticate('local', { session: false });

// multer configurations
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const image = type => 'image/' + type
    switch (file.mimetype) {
        case image('jpeg'):
            cb(null, true)
            break;

        case image('png'):
            cb(null, true)
            break;
    
        default:
            cb(null, false)
            break;
    }
}


const upload = multer({
    storage,
    limits: {
        fileSize: 2048 * 2048 * 6
    },
    fileFilter
})

router.use(express.json())


// retrieve the model
const FileModel = require('../models/files')
const User = require('../models/user')


router.get( '/:id', async (req,res,next) => {
    const file = await FileModel.findById(req.params.id)

    res.send(file.path)
} )

router.post('/', requireAuth, upload.single('file'), (req,res, next) => {
    const { user, file } = req

    console.log(file)

    FileModel.create({
        user: user._id,
        filePath: file.path
    })
        .then(fileIns => res.json({ id: fileIns._id, path: file.path }))
        .catch(err => console.log(err))
})


module.exports = router