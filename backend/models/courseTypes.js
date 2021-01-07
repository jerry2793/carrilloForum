const Mongoose = require('mongoose')
const { Schema } = require("mongoose");

const courseTypeSchema = new Schema({
    name: String,
    user: Mongoose.Types.ObjectId,
    pictures: [Mongoose.Types.ObjectId],
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const CourseTypeModel = Mongoose.model('course-types', courseTypeSchema)
module.exports = CourseTypeModel