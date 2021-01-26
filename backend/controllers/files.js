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
        cb(null, req.user._id + ' ' + new Date().toISOString().replace(/:/g, '-') + ' ' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    const image = type => 'image/' + type

    switch (file.mimetype) {
        case image('jpeg'):
            cb(null, true)
            break;

        case image('jpg'):
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
    // check if the file is public, 
    const file = await FileModel.findById(req.params.id)

    if (file.isPublic) {
        req.fileIns = file
        next()
    } else {
        res.redirect(`/privateQuery/${req.params.id}`)
    }
}, async (req,res,next) => {
    const file = req.fileIns
    console.log(file)

    const fileLocation = `/${file.filePath.replace('\\', '/')}`
    console.log(fileLocation)
    
    res.redirect(fileLocation)
} )

router.post('/', requireAuth, upload.single('file'), (req,res, next) => {
    console.log('Passing onto file post express handler')
    const { user, file } = req

    console.log(file)

    FileModel.create({
        user: user._id,
        filePath: file.path
    })
        .then(fileIns => res.json({ id: fileIns._id, path: file.path }))
        .catch(err => console.log(err))
})

router.get('/privateQuery/:id', requireAuth, async (req,res,next) => {
    // when request is redirected here, and that user is authenticated
    const fileId = req.params.id
    const userId = req.user._id

    const file = await FileModel.findById(fileId)

    const fileLocation = `/${file.filePath.replace('\\', '/')}`

    if (file.user === userId) {
        res.redirect(fileLocation)
    } else {
        res.status(422).json({ error: "File id given user id does not exist." })
    }
})


module.exports = router