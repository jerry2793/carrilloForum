const Mongoose = require('mongoose')
const { Schema } = require("mongoose");

const fileSchema = new Schema({
    user: Mongoose.Types.ObjectId,
    filePath: String,
    isPublic: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const FileModel = Mongoose.model('files', fileSchema)
module.exports = FileModel