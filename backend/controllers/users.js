const passport = require('passport')

const router = require('express').Router()

const Courses = require('../models/courses')
const User = require('../models/user')

const requireAuth = passport.authenticate('jwt', { session: false });
const requrieAdmin = require('../middlewares/reqAdmin')

router.get('/courses', requireAuth, async (req,res) => {
    const enrolledCourses = []
    Courses.find((err, courses) => {
        courses.forEach((course, idx) => {
            if (course.enrolled.includes(req.user._id)) {
                enrolledCourses.push(course)
            }
        })
    })
    res.json(enrolledCourses)
})



module.exports = router