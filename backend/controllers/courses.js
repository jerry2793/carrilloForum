const router = require('express').Router()

const Courses = require('../models/courses')
const CourseTypes = require('../models/courseTypes')

const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requrieAdmin = require('../middlewares/reqAdmin')
// const requireSignin = passport.authenticate('local', { session: false });


router.get('/types', (req,res) => {
    res.json(CourseTypes.find())
})

router.get('/:id', (req,res) => {
    Courses.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(422).json({ error: err }))
})

router.post('/add', requireAuth, (req,res) => {
    const data = req.body
    data.owner = req.user
    Courses.create(data)
        .then((val) => res.status(200).json(val))
        .catch(err => res.status(422).json({ error: err }))
})

router.post('/enroll', requireAuth, async (req,res) => {
    const courseId = req.body.courseId
    const userId = req.user._id

    let courseBefore = await Courses.findById(courseId)
    if (!courseBefore.pending.includes(userId)) {
        courseBefore.pending.push(userId)
    } else {
        res.json({ msg: 'You are in the pending process, contact the course owner to approve you in!' })
    }

    Courses.findByIdAndUpdate(courseId, courseBefore)
        .then(course => res.json(course))
        .catch(err => res.status(422).json({ error: err }))
})

// admin protected routes
router.get('/manage/:courseId', requireAuth, requrieAdmin(Courses), (req,res) => {
    // get all info when expand into course admin details
    const courseId = req.params.courseId

    res.json(Courses.findById(courseId))
})

router.post('/approve', requireAuth, requrieAdmin(Courses), async (req,res) => {
    const courseId = req.body.courseId
    const userId = req.body.userId

    let course = await Courses.findById(courseId)

    if (course.pending.includes(userId)) {
        const idx = course.pending.indexOf(userId)
        course = course.pending.splice(idx,1)
        course.enrolled.push(userId)
        Courses.findByIdAndUpdate(courseId, course)
            .then(val => res.json(val))
            .catch(err => res.status(422).json({ error: err }))
    } else {
        res.json({ msg: 'Error: this user is not in the waiting list...' })
    }
})

module.exports = router