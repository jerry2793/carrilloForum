import Mongoose from 'mongoose'
import { Schema } from "mongoose";

const courseTypeSchema = new Schema({
    name: String,
    pictures: [Mongoose.Types.Buffer]
})

const CourseTypeModel = Mongoose.model('course-types', courseTypeSchema)
module.exports = CourseTypeModel