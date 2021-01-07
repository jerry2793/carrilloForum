const Mongoose = require('mongoose')
const { Schema } = require("mongoose");

const fileSchema = new Schema({
    fileData: {
        type: Buffer,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const FileModel = Mongoose.model('files', fileSchema)
module.exports = FileModel