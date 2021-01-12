const { Router } = require("express")

const router = Router()

const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requrieAdmin = require('../../middlewares/reqAdmin')

router.get('/picture/:id', (req,res) => {
    res.send(Files.findById(req.params.id))
})

router.get('/', (req,res) => {
    res.json(CourseTypes.find())
})

router.post('')

module.exports = router