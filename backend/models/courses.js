const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const objId = mongoose.Types.ObjectId

// Define our model
const courseShema = new Schema({
  name: {
      type: String,
      lowercase: true,
  },
  description: String,
  type: objId,
  owner: objId,
  pending: [objId],
  enrolled: [objId],
});


const ModelClass = mongoose.model('courses', courseShema);
module.exports = ModelClass;